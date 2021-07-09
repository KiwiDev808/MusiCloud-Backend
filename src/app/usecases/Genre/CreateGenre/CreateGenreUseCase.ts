import { Genre } from '../../../entities/Genre';
import { IGenresRepository } from '../../../repositories/IGenresRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import { USER_ROLES } from '../../../types/UserRoles';
import {
  ICreateGenreRequestDTO,
  ICreateGenreResponseDTO,
  ICreateGenreValidatedDataDTO,
} from './CreateGenreDTO';
import { CreateGenreValidator } from './CreateGenreValidator';

export class CreateGenreUseCase {
  constructor(
    private genresRepository: IGenresRepository,
    private usersRepository: IUsersRepository,
    private validator: CreateGenreValidator,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: ICreateGenreRequestDTO,
  ): Promise<ICreateGenreResponseDTO> {
    const message = 'Sucess!';
    const { token, ...validData }: ICreateGenreValidatedDataDTO =
      this.validator.validate(data);

    const { id: userId, role } = this.authenticator.getTokenData(token);

    if (role !== USER_ROLES.ADMIN) {
      throw APIError.unauthorized('ONLY ADMINS');
    }

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const genreId = this.idGenerator.generate();
    const newGenre = new Genre({ ...validData }, genreId);
    await this.genresRepository.save(newGenre);

    return { message };
  }
}
