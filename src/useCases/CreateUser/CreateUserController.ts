import { Request, Response } from 'express';
import { BaseController } from '../../core/BaseController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserService } from '../../services/user/CreateUserService';

export class CreateUserController extends BaseController {
  public constructor(public readonly creatUserUseCase: CreateUserUseCase) {
    super();
  }
  handle(request: Request, response: Response): void {
    const { firstName, lastName, email, password } = request.body;

    try {
      const user = CreateUserService.createUser({
        firstName,
        lastName,
        email,
        password,
      });
      this.creatUserUseCase.execute(user);
      BaseController.sendResponse(response, { user }, 200);
    } catch (error) {
      this.httpBadRequest(response, error.message);
    }
  }
}
