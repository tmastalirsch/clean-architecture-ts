import IDomainError from './../../error/IDomainError';
export default class InvalidPasswordError
  extends Error
  implements IDomainError {
  constructor() {
    super(`Password is invalid.`);
    this.name = 'InvalidPasswordError';
  }
}
