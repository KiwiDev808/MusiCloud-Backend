import { IGenresRepository } from '../../../repositories/IGenresRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { APIError } from '../../../services/APIError';
import { Authenticator } from '../../../services/Authenticator';
import {
  IGetAllGenresRequestDTO,
  IGetAllGenresResponseDTO,
  IGetAllGenresValidatedDataDTO,
} from './GetAllGenresDTO';
import { GetAllGenresValidator } from './GetAllGenresValidator';

export class GetAllGenresUseCase {
  constructor(
    private genresRepository: IGenresRepository,
    private usersRepository: IUsersRepository,
    private validator: GetAllGenresValidator,
    private authenticator: Authenticator,
  ) {}

  async execute(
    data: IGetAllGenresRequestDTO,
  ): Promise<IGetAllGenresResponseDTO> {
    const message = 'Sucess!';
    const { token, ...validData }: IGetAllGenresValidatedDataDTO =
      this.validator.validate(data);

    const { id: userId, role } = this.authenticator.getTokenData(token);

    const userExists = await this.usersRepository.findById(userId);
    if (!userExists) {
      throw APIError.unauthorized();
    }

    const genres = await this.genresRepository.getAll();

    return { message, genres };
  }
}
