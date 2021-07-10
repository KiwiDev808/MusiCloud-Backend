import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IUserProfileProfileDTO,
  IUserProfileRequestDTO,
  IUserProfileResponseDTO,
} from './UserProfileDTO';
import { UserProfileValidator } from './UserProfileValidator';

export class UserProfileUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: UserProfileValidator,
    private authenticator: Authenticator,
  ) {}
  async execute(
    data: IUserProfileRequestDTO,
  ): Promise<IUserProfileResponseDTO> {
    const validData = this.validator.validate(data);
    const { id: userId, role } = this.authenticator.getTokenData(
      validData.token,
    );

    const userExist = await this.usersRepository.findById(userId);

    if (!userExist) {
      throw APIError.unauthorized();
    }

    const profile: IUserProfileProfileDTO = {
      name: userExist.name,
      nickname: userExist.nickname,
    };

    return { message: 'Success', profile };
  }
}
