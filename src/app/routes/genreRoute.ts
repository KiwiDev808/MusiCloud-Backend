import { Request, Response, Router } from 'express';
import 'express-async-errors'; // handle async errors without need of catch in controllers
import { createGenreController } from '../usecases/Genre/CreateGenre';
import { getAllGenresController } from '../usecases/Genre/GetAllGenres';

const genreRouter = Router();

genreRouter.post('/', (req: Request, res: Response) => {
  return createGenreController.handle(req, res);
});

genreRouter.get('/', (req: Request, res: Response) => {
  return getAllGenresController.handle(req, res);
});

export { genreRouter };
