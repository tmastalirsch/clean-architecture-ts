import { CreateUserController } from './../useCases/CreateUser/CreateUserController';
import { Router, Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserUseCase } from '../useCases/CreateUser/CreateUserUseCase';

export default (router: Router): void => {
  router
    .route('/users')
    .get((_req: Request, res: Response, _next?: NextFunction): void => {
      res.status(200).json({ message: 'Get all users' });
    })
    .post((req: Request, res: Response, _next: NextFunction): void => {
      const repository = new UserRepository();
      const useCase = new CreateUserUseCase(repository);
      const controller = new CreateUserController(useCase);
      controller.execute(req, res);
    })
    .all((_req: Request, res: Response, _next?: NextFunction): void => {
      res.status(501).json({ message: 'Not Implemented' });
    });

  router
    .route('/users/:id')
    .get((req: Request, res: Response, _next?: NextFunction): void => {
      const id = req.params.id;
      res.status(200).json({ message: 'Get user by id: ' + id });
    })
    .all((_req: Request, res: Response, _next?: NextFunction): void => {
      res.status(501).json({ message: 'Not Implemented' });
    });
};
