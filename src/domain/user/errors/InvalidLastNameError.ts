import IDomainError from './../../error/IDomainError';
export default class InvalidLastNameError
  extends Error
  implements IDomainError {
  constructor(lastName: string) {
    super(`The last name "${lastName}" is invalid.`);
    this.name = 'InvalidLastNameError';
  }
}
