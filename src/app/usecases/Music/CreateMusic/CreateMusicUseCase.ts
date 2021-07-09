import { Music } from '../../../entities/Music';
import { IAlbumsRepository } from '../../../repositories/IAlbumsRepository';
import { IGenresRepository } from '../../../repositories/IGenresRepository';
import { IMusicsGenresRepository } from '../../../repositories/IMusicsGenresRepository';
import { IMusicsRepository } from '../../../repositories/IMusicsRepository ';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import {
  ICreateMusicRequestDTO,
  ICreateMusicResponseDTO,
  ICreateMusicValidatedDataDTO,
} from './CreateMusicDTO';
import { CreateMusicValidator } from './CreateMusicValidator';

export class CreateMusicUseCase {
  constructor(
    private musicsRepository: IMusicsRepository,
    private genresRepository: IGenresRepository,
    private musicsGenresRepository: IMusicsGenresRepository,
    private albumsRepository: IAlbumsRepository,
    private usersRepository: IUsersRepository,
    private validator: CreateMusicValidator,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: ICreateMusicRequestDTO,
  ): Promise<ICreateMusicResponseDTO> {
    const message = 'Sucess!';
    const { genres, token, ...validData }: ICreateMusicValidatedDataDTO =
      this.validator.validate(data);

    const musicId = this.idGenerator.generate();
    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.notFound('User not found');
    }

    const genresArr = await this.genresRepository.find(genres);
    if (genresArr.length !== genres.length) {
      throw APIError.notFound('Genre not found');
    }

    const album = await this.albumsRepository.find(validData.album_id);
    if (!album) {
      throw APIError.unauthorized();
    }

    const musicObj = new Music({ user_id: userId, ...validData }, musicId);
    await this.musicsRepository.save(musicObj);
    await this.musicsGenresRepository.save(musicObj, genresArr);

    return { message };
  }
}
