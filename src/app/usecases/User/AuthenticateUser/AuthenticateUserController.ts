import { Request, Response } from 'express';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

export class AuthenticateUserController {
  constructor(private AuthenticateUserUseCase: AuthenticateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { email, password } = req.body;

    const response = await this.AuthenticateUserUseCase.execute({
      email,
      password,
    });

    return res.status(200).send(response);
  }
}
