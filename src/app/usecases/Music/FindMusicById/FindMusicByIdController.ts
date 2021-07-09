import { Request, Response } from 'express';
import { FindMusicByIdUseCase } from './FindMusicByIdUseCase';

export class FindMusicByIdController {
  constructor(private FindMusicByIdUseCase: FindMusicByIdUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization;
    const id = req.params.id;

    const response = await this.FindMusicByIdUseCase.execute({
      token,
      id,
    });

    return res.status(200).send(response);
  }
}
