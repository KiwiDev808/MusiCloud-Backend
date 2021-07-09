import { IMusicsRepository } from '../../../repositories/IMusicsRepository ';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IGetAllMusicsRequestDTO,
  IGetAllMusicsResponseDTO,
  IGetAllMusicsValidatedDataDTO,
} from './GetAllMusicsDTO';
import { GetAllMusicsValidator } from './GetAllMusicsValidator';

export class GetAllMusicsUseCase {
  constructor(
    private musicsRepository: IMusicsRepository,
    private usersRepository: IUsersRepository,
    private validator: GetAllMusicsValidator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: IGetAllMusicsRequestDTO,
  ): Promise<IGetAllMusicsResponseDTO> {
    const message = 'Sucess!';
    const { token }: IGetAllMusicsValidatedDataDTO =
      this.validator.validate(data);
    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const musics = await this.musicsRepository.getAll();

    return { message, musics: musics };
  }
}
