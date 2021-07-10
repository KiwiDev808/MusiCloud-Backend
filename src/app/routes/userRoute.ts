import { Request, Response, Router } from 'express';
import 'express-async-errors'; // handle async errors without need of catch in controllers
import { authenticateUserController } from '../usecases/User/AuthenticateUser';
import { createUserController } from '../usecases/User/CreateUser';
import { findProfileController } from '../usecases/User/FindProfile';
import { userProfileController } from '../usecases/User/UserProfile';

const userRouter = Router();

userRouter.get('/profile', (req: Request, res: Response) => {
  return userProfileController.handle(req, res);
});

userRouter.get('/profile/:id', (req: Request, res: Response) => {
  return findProfileController.handle(req, res);
});

userRouter.post('/login', (req: Request, res: Response) => {
  return authenticateUserController.handle(req, res);
});

userRouter.post('/signup', (req: Request, res: Response) => {
  return createUserController.handle(req, res);
});

export { userRouter };
