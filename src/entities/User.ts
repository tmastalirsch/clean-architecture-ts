import FirstName from '../domain/user/FirstName';
import Email from '../domain/user/Email';
import LastName from '../domain/user/LastName';
import Password from '../domain/user/Password';
import { Entity } from '../core/Entity';
import { UniqueEntityId } from '../core/UniqueEntityId';

export interface IUserProps {
  firstName: FirstName;
  lastName: LastName;
  email: Email;
  password: Password;
  active: boolean;
}

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
}

export interface IUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
}

/**
 * @description
 * @author tmastalirsch
 */
export default class User extends Entity<IUserProps> {
  public readonly firstName: FirstName;
  public readonly lastName: LastName;
  public readonly email: Email;
  public readonly password: Password;
  public readonly active: boolean;

  private constructor(props: IUserProps, id?: UniqueEntityId) {
    super(props, id);
    Object.freeze(this);
  }

  static create(userProps: IUserProps, id?: UniqueEntityId): User {
    return new User(userProps, id);
  }

  static toDTO(user: User): Omit<IUserDTO, 'password'> {
    return {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      email: user.email.value,
      active: user.active,
    };
  }

  public static toPersistence(user: User): IUser {
    return {
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      email: user.email.value,
      password: user.password.value,
      active: user.active,
    };
  }

  static toDomain(raw: IUser): User {
    try {
      const firstName = FirstName.create(raw.firstName);
      const lastName = LastName.create(raw.lastName);
      const email = Email.create(raw.email);
      const password = Password.create(raw.password);
      const active = raw.active;

      return new User(
        { firstName, lastName, email, password, active },
        raw.id ? new UniqueEntityId(raw.id) : new UniqueEntityId()
      );
    } catch (error) {
      throw error;
    }
  }
}
