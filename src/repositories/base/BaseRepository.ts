import { Db, Collection, InsertOneWriteOpResult } from 'mongodb';

import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  public readonly collection: Collection;
  constructor(db: Db, collectionName: string) {
    this.collection = db.collection(collectionName);
  }
  async save(item: T): Promise<boolean> {
    const result: InsertOneWriteOpResult<{
      _id: string;
    }> = await this.collection.insertOne(item);
    return !!result.result.ok;
  }
  update(_id: string, _item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(_id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  find(_item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  findOne(_id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}
