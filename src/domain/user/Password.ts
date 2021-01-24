import { ValueObject } from '../../core/ValueObject';
import InvalidPasswordError from './errors/InvalidPasswordError';
import { validatePassword } from './UserValidation';

interface IPassword {
  password: string;
}
/**
 * @description
 * @author tmastalirsch
 */
export default class Password extends ValueObject<IPassword> {
  private constructor(props: IPassword) {
    super(props);
  }

  static create(password: string): Password {
    if (!validatePassword(password)) throw new InvalidPasswordError();
    return new Password({ password });
  }

  get value(): string {
    return this.props.password;
  }
}
