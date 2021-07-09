import { Request, Response } from 'express';
import { CreateAlbumUseCase } from './CreateAlbumUseCase';

export class CreateAlbumController {
  constructor(private CreateAlbumUseCase: CreateAlbumUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { name } = req.body;
    const token = req.headers.authorization;

    const response = await this.CreateAlbumUseCase.execute({
      name,
      token,
    });

    return res.status(201).send(response);
  }
}
