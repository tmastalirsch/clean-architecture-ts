/**
 *
 */
interface CallbackFunction {
  (a?: any, b?: any): any;
}

/**
 * @description Print a message with given value to the console
 * @param { string } message
 * @param { unknown } value
 * @returns { void }
 * @author tmastalirsch
 */
export const printToConsole: CallbackFunction = (
  message: string,
  value?: unknown
): void => console.log(message + `${value}`);
