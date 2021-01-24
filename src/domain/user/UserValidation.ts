const EMAIL_TESTER = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// const NAME_TESTER = /^[a-zA-Z]+ [a-zA-Z]+$/;

/**
 *
 * @param email
 */
export const validateEmail = (email: string): boolean => {
  if (!email) return false;
  if (email.length > 256) return false;
  if (!EMAIL_TESTER.test(email)) return false;

  const [account, domain] = email.split('@');

  if (account.length > 64) return false;

  const domains = domain.split('.');

  if (domains.some((part) => part.length > 63 && part.length >= 2)) {
    return false;
  }

  return true;
};
/**
 *
 * @param name
 */
export const validateName = (name: string): boolean => {
  if (!name) return false;
  if (name.length <= 3 || name.length > 256) return false;

  // if (!NAME_TESTER.test(name)) return false;

  return true;
};
/**
 *
 * @param password
 */
export const validatePassword = (password: string): boolean => {
  if (!password) return false;
  if (password.length < 8 || password.length > 256) return false;
  return true;
};
