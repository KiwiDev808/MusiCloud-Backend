import { Request, Response } from 'express';
import { CreateGenreUseCase } from './CreateGenreUseCase';

export class CreateGenreController {
  constructor(private CreateGenreUseCase: CreateGenreUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { name } = req.body;
    const token = req.headers.authorization;

    const response = await this.CreateGenreUseCase.execute({
      name,
      token,
    });

    return res.status(201).send(response);
  }
}
