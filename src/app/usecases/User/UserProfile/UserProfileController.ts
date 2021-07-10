import { Request, Response } from 'express';
import { UserProfileUseCase } from './UserProfileUseCase';

export class UserProfileController {
  constructor(private userProfileUseCase: UserProfileUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const token = req.headers.authorization;

    const response = await this.userProfileUseCase.execute({
      token,
    });

    return res.status(200).send(response);
  }
}
