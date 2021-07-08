import { Request, Response, Router } from 'express';
import 'express-async-errors'; // handle async errors without need of catch in controllers
import { authenticateUserController } from '../usecases/User/AuthenticateUser';
import { createUserController } from '../usecases/User/CreateUser';

const userRouter = Router();

userRouter.post('/login', (req: Request, res: Response) => {
  return authenticateUserController.handle(req, res);
});

userRouter.post('/signup', (req: Request, res: Response) => {
  return createUserController.handle(req, res);
});

export { userRouter };
