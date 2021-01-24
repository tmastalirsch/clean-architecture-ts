import { createConnection, Connection, ConnectOptions } from 'mongoose';
import express from 'express';
import { readdirSync } from 'fs';

import { printToConsole } from '../utils/Utils';
import Middleware from './Middleware';

export default class App {
  private static DEFAULT_URI = 'mongodb://localhost';
  private static instance: App;
  public readonly app: express.Application;
  public readonly router: express.Router;

  public constructor(
    public readonly version = 'v1',
    public readonly connection: Connection
  ) {
    this.app = express();
    this.router = express.Router();
    this.version = version;
    this.connection = connection;
    Middleware.init(this.app);
  }

  public static async init(
    version = 'v1',
    uri?: string,
    options?: ConnectOptions
  ): Promise<App> {
    const connection = uri
      ? await App.createConnection(uri, options)
      : await App.createDefaultConnection();
    App.instance = new App(version, connection);
    return App.instance;
  }

  public static async createConnection(
    uri: string,
    options?: ConnectOptions
  ): Promise<Connection> {
    return await createConnection(uri, options);
  }

  public static async createDefaultConnection(): Promise<Connection> {
    const connection = await createConnection(App.DEFAULT_URI, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  }

  public static getInstance(): App {
    if (!App.instance) {
      throw new Error('Application muss be initialize');
    }
    return App.instance;
  }

  public resolve(): void {
    this.app.use('/api/' + this.version, this.router);
    const directoryPath = __dirname;
    const path = `${directoryPath}/../routes`;
    readdirSync(path).map(async (file) => {
      (await import(`../routes/${file}`)).default(this.router);
    });
  }

  public listen(port?: number): void {
    port = port ? port : 3000;
    this.app.listen(port, printToConsole('Server is running on port: ', port));
  }

  public getConnection(): Connection {
    return this.connection;
  }
}
