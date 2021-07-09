import { Album } from '../../../entities/Album';
import { IAlbumsRepository } from '../../../repositories/IAlbumsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import {
  ICreateAlbumRequestDTO,
  ICreateAlbumResponseDTO,
  ICreateAlbumValidatedDataDTO,
} from './CreateAlbumDTO';
import { CreateAlbumValidator } from './CreateAlbumValidator';

export class CreateAlbumUseCase {
  constructor(
    private albumsRepository: IAlbumsRepository,
    private usersRepository: IUsersRepository,
    private validator: CreateAlbumValidator,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: ICreateAlbumRequestDTO,
  ): Promise<ICreateAlbumResponseDTO> {
    const message = 'Sucess!';
    const { token, ...validData }: ICreateAlbumValidatedDataDTO =
      this.validator.validate(data);

    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const albumId = this.idGenerator.generate();
    const newAlbum = new Album({ user_id: userId, ...validData }, albumId);
    await this.albumsRepository.save(newAlbum);

    return { message };
  }
}
