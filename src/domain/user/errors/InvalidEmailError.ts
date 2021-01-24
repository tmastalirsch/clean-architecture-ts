import IDomainError from '../../error/IDomainError';
export default class InvalidEmailError extends Error implements IDomainError {
  constructor(email: string) {
    super(`The email ${email} is invalid.`);
    this.name = 'InvalidEmailError';
  }
}
