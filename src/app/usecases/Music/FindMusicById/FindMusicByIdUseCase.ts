import { IMusicsRepository } from '../../../repositories/IMusicsRepository ';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IFindMusicByIdRequestDTO,
  IFindMusicByIdResponseDTO,
} from './FindMusicByIdDTO';
import { FindMusicByIdValidator } from './FindMusicByIdValidator';

export class FindMusicByIdUseCase {
  constructor(
    private musicsRepository: IMusicsRepository,
    private usersRepository: IUsersRepository,
    private validator: FindMusicByIdValidator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: IFindMusicByIdRequestDTO,
  ): Promise<IFindMusicByIdResponseDTO> {
    const message = 'Sucess!';
    const { token, id: musicId } = this.validator.validate(data);

    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const music = await this.musicsRepository.find(musicId);
    if (!music) {
      throw APIError.notFound('Music not found');
    }

    return { message, music };
  }
}
