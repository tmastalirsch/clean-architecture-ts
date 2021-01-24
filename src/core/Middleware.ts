import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

export default class Middleware {
  static init(app: express.Application): void {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
  }
}
