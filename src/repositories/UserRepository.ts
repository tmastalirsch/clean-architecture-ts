import Application from '../core/Application';
import { IUser } from '../entities/User';
import { BaseRepository } from './base/BaseRepository';
import { IUserRepository } from './interfaces/user/IUserRepository';

export class UserRepository
  extends BaseRepository<IUser>
  implements IUserRepository {
  public constructor() {
    super(Application.getInstance().getConnection().db, 'user');
  }

  all(): Promise<IUser[]> {
    throw new Error('Method not implemented.');
  }
  findByEmail(_email: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findByFirstName(_firstName: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
  findByLastName(_lastName: string): Promise<IUser> {
    throw new Error('Method not implemented.');
  }
}
