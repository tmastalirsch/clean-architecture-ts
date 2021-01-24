import * as faker from 'faker';

import * as UserValidation from './../UserValidation';
import Email from '../Email';
import FirstName from '../FirstName';
import LastName from '../LastName';
import Password from '../Password';

import InvalidEmailError from '../errors/InvalidEmailError';
import InvalidFirstNameError from '../errors/InvalidFirstNameError';
import InvalidLastNameError from '../errors/InvalidLastNameError';
import InvalidPasswordError from '../errors/InvalidPasswordError';

describe('User domain test', () => {
  let validFirstName: string;
  let validLastName: string;
  let validEmail: string;
  let validPassword: string;

  beforeAll(() => {
    validEmail = faker.internet.email();
    validFirstName = faker.name.firstName();
    validLastName = faker.name.lastName();
    validPassword = faker.internet.password();
  });

  test('Should throw an InvalidEmailError by invalid email', () => {
    const mock = jest.spyOn(UserValidation, 'validateEmail');
    mock.mockImplementation(() => false);
    expect(() => Email.create(validEmail)).toThrow(InvalidEmailError);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateEmail).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Returns a valid email address', () => {
    const mock = jest.spyOn(UserValidation, 'validateEmail');
    mock.mockImplementation(() => true);
    const email = Email.create(validEmail);
    expect(email.value).toEqual(validEmail);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateEmail).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Should throw an InvalidFirstNameError by invalid first name', () => {
    const mock = jest.spyOn(UserValidation, 'validateName');
    mock.mockImplementation(() => false);
    expect(() => FirstName.create(validFirstName)).toThrow(
      InvalidFirstNameError
    );
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateName).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Returns a valid first name', () => {
    const mock = jest.spyOn(UserValidation, 'validateName');
    mock.mockImplementation(() => true);
    const firstName = FirstName.create(validFirstName);
    expect(firstName.value).toEqual(validFirstName);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateName).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Should throw an InvalidLastNameError by invalid last name', () => {
    const mock = jest.spyOn(UserValidation, 'validateName');
    mock.mockImplementation(() => false);
    expect(() => LastName.create(validLastName)).toThrow(InvalidLastNameError);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateName).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Returns a valid last name', () => {
    const mock = jest.spyOn(UserValidation, 'validateName');
    mock.mockImplementation(() => true);
    const lastName = LastName.create(validLastName);
    expect(lastName.value).toEqual(validLastName);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validateName).toBeCalledTimes(1);
    mock.mockRestore();
  });

  test('Should throw an InvalidPasswordError by invalid password', () => {
    const mock = jest.spyOn(UserValidation, 'validatePassword');
    mock.mockImplementation(() => false);
    expect(() => Password.create(validPassword)).toThrow(InvalidPasswordError);
    expect(mock).toHaveBeenCalled();
    expect(UserValidation.validatePassword).toBeCalledTimes(1);
    mock.mockRestore();
  });
});
