import IDomainError from './../../error/IDomainError';
export default class InvalidFirstNameError
  extends Error
  implements IDomainError {
  constructor(firstName: string) {
    super(`The first name "${firstName}" is invalid.`);
    this.name = 'InvalidFirstNameError';
  }
}
