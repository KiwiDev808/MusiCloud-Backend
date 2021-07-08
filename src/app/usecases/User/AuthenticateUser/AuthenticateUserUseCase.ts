import { User } from '../../../entities/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import { HashManager } from '../../../services/HashManager';
import {
  IAuthenticateUserRequestDTO,
  IAuthenticateUserResponseDTO,
} from './AuthenticateUserDTO';
import { AuthenticateUserValidator } from './AuthenticateUserValidator';

export class AuthenticateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: AuthenticateUserValidator,
    private hashManager: HashManager,
    private authenticator: Authenticator,
  ) {}
  async execute(
    data: IAuthenticateUserRequestDTO,
  ): Promise<IAuthenticateUserResponseDTO> {
    const validData = this.validator.validate(data);

    const userExist = await this.usersRepository.findByEmail(validData.email);

    if (!userExist) {
      throw APIError.notFound("User doesn't exist");
    }

    const passwordIsCorrect = await this.hashManager.compare(
      validData.password,
      userExist.password,
    );

    if (!passwordIsCorrect) {
      throw APIError.wrongParams('Incorrect password');
    }

    const user = new User(userExist, userExist.getId());

    const token = this.authenticator.generateToken({
      id: user.getId(),
      role: user.role,
    });

    return { token, message: 'Success' };
  }
}
