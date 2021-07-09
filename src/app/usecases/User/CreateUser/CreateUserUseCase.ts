import { User } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import { HashManager } from '../../../services/HashManager';
import { IdGenerator } from '../../../services/IdGenerator';
import {
  ICreateUserRequestDTO,
  ICreateUserResponseDTO,
  ICreateUserValidatedDataDTO,
} from './CreateUserDTO';
import { CreateUserValidator } from './CreateUserValidator';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: CreateUserValidator,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator,
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
    const message = 'Sucess!';
    const validData: ICreateUserValidatedDataDTO =
      this.validator.validate(data);

    const alreadyRegistered = await this.usersRepository.findByEmailOrNickname(
      validData.email,
      validData.nickname,
    );

    if (alreadyRegistered) {
      throw APIError.badRequest('Email or nickname already registered');
    }

    const id = this.idGenerator.generate();
    const passwordHash = await this.hashManager.hash(validData.password);

    const user = new User({ ...validData, password: passwordHash }, id);
    await this.usersRepository.save(user);

    const token = this.authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    return { message, token };
  }
}
