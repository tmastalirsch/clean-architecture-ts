import { IUser } from '../../../entities/User';

export interface IUserRepository {
  all(): Promise<IUser[]>;
  findByEmail(email: string): Promise<IUser>;
  findByFirstName(firstName: string): Promise<IUser>;
  findByLastName(lastName: string): Promise<IUser>;
}
