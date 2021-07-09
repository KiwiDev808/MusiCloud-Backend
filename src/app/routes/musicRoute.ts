import { Request, Response, Router } from 'express';
import 'express-async-errors'; // handle async errors without need of catch in controllers
import { createMusicController } from '../usecases/Music/CreateMusic';
import { findMusicByIdController } from '../usecases/Music/FindMusicById';
import { getAllMusicsController } from '../usecases/Music/GetAllMusics';

const musicRouter = Router();

musicRouter.post('/', (req: Request, res: Response) => {
  return createMusicController.handle(req, res);
});

musicRouter.get('/', (req: Request, res: Response) => {
  return getAllMusicsController.handle(req, res);
});

musicRouter.get('/:id', (req: Request, res: Response) => {
  return findMusicByIdController.handle(req, res);
});

export { musicRouter };
