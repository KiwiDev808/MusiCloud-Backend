import { Request, Response } from 'express';
import { CreateMusicUseCase } from './CreateMusicUseCase';

export class CreateMusicController {
  constructor(private CreateMusicUseCase: CreateMusicUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { title, file, genres, album_id } = req.body;
    const token = req.headers.authorization;

    const response = await this.CreateMusicUseCase.execute({
      title,
      file,
      genres,
      album_id,
      token,
    });

    return res.status(201).send(response);
  }
}
