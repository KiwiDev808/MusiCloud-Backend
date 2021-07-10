import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IFindProfileProfileDTO,
  IFindProfileRequestDTO,
  IFindProfileResponseDTO,
} from './FindProfileDTO';
import { FindProfileValidator } from './FindProfileValidator';

export class FindProfileUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: FindProfileValidator,
    private authenticator: Authenticator,
  ) {}
  async execute(
    data: IFindProfileRequestDTO,
  ): Promise<IFindProfileResponseDTO> {
    const validData = this.validator.validate(data);
    const { id: userId, role } = this.authenticator.getTokenData(
      validData.token,
    );

    const authorizedUser = await this.usersRepository.findById(userId);

    if (!authorizedUser) {
      throw APIError.unauthorized();
    }

    const userExist = await this.usersRepository.findById(validData.id);

    if (!userExist) {
      throw APIError.notFound('User not found');
    }

    const profile: IFindProfileProfileDTO = {
      name: userExist.name,
      nickname: userExist.nickname,
    };

    return { message: 'Success', profile };
  }
}
