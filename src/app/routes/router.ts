import { Request, Response, Router } from 'express';
import { albumRouter } from './albumRoute';
import { genreRouter } from './genreRoute';
import { musicRouter } from './musicRoute';
import { userRouter } from './userRoute';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send({ message: 'API is Functional' });
});

router.use('/user', userRouter);
router.use('/music', musicRouter);
router.use('/genre', genreRouter);
router.use('/album', albumRouter);

export { router };
