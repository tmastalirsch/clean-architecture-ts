import { ValueObject } from '../../core/ValueObject';
import InvalidLastNameError from './errors/InvalidLastNameError';
import { validateName } from './UserValidation';

interface ILastName {
  lastName: string;
}
/**
 * @description
 * @author tmastalirsch
 */
export default class LastName extends ValueObject<ILastName> {
  private constructor(props: ILastName) {
    super(props);
  }

  static create(name: string): LastName {
    if (!validateName(name)) throw new InvalidLastNameError(name);
    return new LastName({ lastName: name });
  }

  get value(): string {
    return this.props.lastName;
  }
}
