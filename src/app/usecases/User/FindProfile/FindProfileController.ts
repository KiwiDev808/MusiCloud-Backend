import { Request, Response } from 'express';
import { FindProfileUseCase } from './FindProfileUseCase';

export class FindProfileController {
  constructor(private findProfileUseCase: FindProfileUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const id = req.params.id;
    const token = req.headers.authorization;

    const response = await this.findProfileUseCase.execute({
      id,
      token,
    });

    return res.status(200).send(response);
  }
}
