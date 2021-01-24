// import { Request, Response } from 'express';
// import { BaseController } from '../../core/BaseController';
// import { CreateUserUseCase } from './CreateUserUseCase';
// import User from '../../entities/User';

// export class CreateUserController extends BaseController {
//   public constructor(public readonly creatUserUseCase: CreateUserUseCase) {
//     super();
//   }
//   handle(request: Request, response: Response): void {
//     const { firstName, lastName, email, password } = request.body;

//     try {
//       // const user = User.create({ firstName, lastName, email, password });
//       BaseController.sendResponse(response, { user }, 200);
//     } catch (error) {
//       this.httpBadRequest(response, error.message);
//     }
//   }
// }
