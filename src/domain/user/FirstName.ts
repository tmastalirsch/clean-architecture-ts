import { ValueObject } from '../../core/ValueObject';
import InvalidFirstNameError from './errors/InvalidFirstNameError';
import { validateName } from './UserValidation';

interface IFirstName {
  firstName: string;
}

/**
 * @description
 * @author tmastalirsch
 */
export default class FirstName extends ValueObject<IFirstName> {
  private constructor(props: IFirstName) {
    super(props);
  }

  static create(firstName: string): FirstName {
    if (!validateName(firstName)) throw new InvalidFirstNameError(firstName);
    return new FirstName({ firstName });
  }

  get value(): string {
    return this.props.firstName;
  }
}
