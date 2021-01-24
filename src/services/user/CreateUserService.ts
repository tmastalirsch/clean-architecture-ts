import { IUser } from '../../entities/User';
import User from '../../entities/User';
import Email from '../../domain/user/Email';
import FirstName from '../../domain/user/FirstName';
import LastName from '../../domain/user/LastName';
import Password from '../../domain/user/Password';

export class CreateUserService {
  public static createUser(user: Omit<IUser, 'active'>): User {
    try {
      const firstName = FirstName.create(user.firstName);
      const lastName = LastName.create(user.lastName);
      const email = Email.create(user.email);
      const password = Password.create(user.password);
      const active = true;
      return User.create({ firstName, lastName, email, password, active });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
