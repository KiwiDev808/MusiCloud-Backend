import { Request, Response } from 'express';
import { GetAllAlbumsUseCase } from './GetAllAlbumsUseCase';

export class GetAllAlbumsController {
  constructor(private GetAllAlbumsUseCase: GetAllAlbumsUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization;

    const response = await this.GetAllAlbumsUseCase.execute({
      token,
    });

    return res.status(200).send(response);
  }
}
