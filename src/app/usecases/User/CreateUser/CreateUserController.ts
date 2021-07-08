import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private CreateUserUseCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    const { name, email, password, role } = req.body;

    const response = await this.CreateUserUseCase.execute({
      name,
      email,
      password,
      role,
    });

    return res.status(201).send(response);
  }
}
