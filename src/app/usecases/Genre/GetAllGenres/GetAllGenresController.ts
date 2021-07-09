import { Request, Response } from 'express';
import { GetAllGenresUseCase } from './GetAllGenresUseCase';

export class GetAllGenresController {
  constructor(private GetAllGenresUseCase: GetAllGenresUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization;

    const response = await this.GetAllGenresUseCase.execute({
      token,
    });

    return res.status(200).send(response);
  }
}
