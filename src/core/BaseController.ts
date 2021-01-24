import express from 'express';

import {
  NotFound,
  BadRequest,
  Created,
  InternalServerError,
} from './HttpCodes';

export abstract class BaseController {
  protected abstract handle(
    request: express.Request,
    response: express.Response
  ): void;

  public async execute(
    request: express.Request,
    response: express.Response
  ): Promise<void> {
    try {
      return this.handle(request, response);
    } catch (error) {
      console.error(error);
    }
  }

  public static sendResponse(
    response: express.Response,
    data: unknown,
    code: number
  ): express.Response<unknown> {
    return response.status(code).json(data);
  }

  public httpCreated(res: express.Response): express.Response<unknown> {
    const httpCode = Created.httpCode;
    return res.sendStatus(httpCode);
  }

  public httpFail(
    response: express.Response,
    error: Error | string,
    code?: number
  ): express.Response<unknown> {
    const httpCode = code ? code : InternalServerError.httpCode;
    return BaseController.sendResponse(response, error, httpCode);
  }

  public httpNotFound(
    response: express.Response,
    message?: Error | string
  ): express.Response<unknown> {
    const httpCode = NotFound.httpCode;
    const error = message ? message : new Error(NotFound.message);
    return this.httpFail(response, error, httpCode);
  }

  public httpBadRequest(
    response: express.Response,
    message?: Error | string
  ): express.Response<unknown> {
    const httpCode = BadRequest.httpCode;
    const error = message ? message : new Error(BadRequest.message);
    return this.httpFail(response, error, httpCode);
  }
}
