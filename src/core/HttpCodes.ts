interface IHttpCode {
  message?: string;
  httpCode: number;
}
/**
 * @constant
 * @description Represent an http created code
 * @author tmastalirsch
 */
export const Created: IHttpCode = {
  httpCode: 201,
};

/**
 * @constant
 * @description Represent an http bad request error
 * @author tmastalirsch
 */
export const BadRequest: IHttpCode = {
  message: 'Bad Request',
  httpCode: 400,
};
/**
 * @constant
 * @description Represent an http not found error
 * @author tmastalirsch
 */
export const NotFound: IHttpCode = {
  message: 'Not Found',
  httpCode: 404,
};
/**
 * @constant
 * @description Represent an http internal server error
 * @author tmastalirsch
 */
export const InternalServerError: IHttpCode = {
  message: 'Internal server error',
  httpCode: 500,
};
