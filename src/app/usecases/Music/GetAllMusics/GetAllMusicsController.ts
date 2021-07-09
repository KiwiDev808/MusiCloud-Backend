import { Request, Response } from 'express';
import { GetAllMusicsUseCase } from './GetAllMusicsUseCase';

export class GetAllMusicsController {
  constructor(private GetAllMusicsUseCase: GetAllMusicsUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization;

    const response = await this.GetAllMusicsUseCase.execute({
      token,
    });

    return res.status(200).send(response);
  }
}
