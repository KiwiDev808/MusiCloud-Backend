import { IAlbumsRepository } from '../../../repositories/IAlbumsRepository';
import { IGenresRepository } from '../../../repositories/IGenresRepository';
import { IMusicsGenresRepository } from '../../../repositories/IMusicsGenresRepository';
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
    private albumsRepository: IAlbumsRepository,
    private genresRepository: IGenresRepository,
    private musicGenresRepository: IMusicsGenresRepository,
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
    const musicAlbum = await this.albumsRepository.find(music.album_id);
    const musicGenresId = await this.musicGenresRepository.find(music.id);
    const musicGenres = await this.genresRepository.find(musicGenresId);
    const musicDetails = {
      ...music,
      album: musicAlbum.name,
      genres: musicGenres.map(genre => {
        return genre.name;
      }),
    };

    return { message, musicDetails };
  }
}
