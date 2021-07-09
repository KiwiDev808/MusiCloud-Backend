import { Request, Response, Router } from 'express';
import 'express-async-errors'; // handle async errors without need of catch in controllers
import { createAlbumController } from '../usecases/Album/CreateAlbum';
import { getAllAlbumsController } from '../usecases/Album/GetAllAlbums';

const albumRouter = Router();

albumRouter.post('/', (req: Request, res: Response) => {
  return createAlbumController.handle(req, res);
});

albumRouter.get('/', (req: Request, res: Response) => {
  return getAllAlbumsController.handle(req, res);
});

export { albumRouter };
