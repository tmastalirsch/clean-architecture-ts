import { ValueObject } from '../../core/ValueObject';
import InvalidEmailError from './errors/InvalidEmailError';
import { validateEmail } from './UserValidation';

interface IEmail {
  email: string;
}

/**
 * @description
 * @author tmastalirsch
 */
export default class Email extends ValueObject<IEmail> {
  private constructor(props: IEmail) {
    super(props);
  }

  static create(email: string): Email {
    if (!Email.isValid(email)) throw new InvalidEmailError(email);
    return new Email({ email });
  }

  static isValid(email: string): boolean {
    return validateEmail(email);
  }

  get value(): string {
    return this.props.email;
  }
}
