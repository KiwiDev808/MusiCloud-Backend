import { Request, Response, Router } from 'express';
import { APIError } from '../services/APIError';
import { albumRouter } from './albumRoute';
import { genreRouter } from './genreRoute';
import { musicRouter } from './musicRoute';
import { userRouter } from './userRoute';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  throw APIError.unauthorized();
  return res.send({ message: 'ok' });
});

router.use('/user', userRouter);
router.use('/music', musicRouter);
router.use('/genre', genreRouter);
router.use('/album', albumRouter);

export { router };
