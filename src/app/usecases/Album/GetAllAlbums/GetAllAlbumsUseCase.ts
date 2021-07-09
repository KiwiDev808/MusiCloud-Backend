import { IAlbumsRepository } from '../../../repositories/IAlbumsRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IGetAllAlbumsRequestDTO,
  IGetAllAlbumsResponseDTO,
  IGetAllAlbumsValidatedDataDTO,
} from './GetAllAlbumsDTO';
import { GetAllAlbumsValidator } from './GetAllAlbumsValidator';

export class GetAllAlbumsUseCase {
  constructor(
    private albumsRepository: IAlbumsRepository,
    private usersRepository: IUsersRepository,
    private validator: GetAllAlbumsValidator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: IGetAllAlbumsRequestDTO,
  ): Promise<IGetAllAlbumsResponseDTO> {
    const message = 'Sucess!';
    const { token, ...validData }: IGetAllAlbumsValidatedDataDTO =
      this.validator.validate(data);

    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const albums = await this.albumsRepository.getUserAlbums(userId);

    return { message, albums };
  }
}
