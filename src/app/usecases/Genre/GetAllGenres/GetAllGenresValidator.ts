import { z } from 'zod';
import {
  IGetAllGenresRequestDTO,
  IGetAllGenresValidatedDataDTO,
} from './GetAllGenresDTO';

export class GetAllGenresValidator {
  validate(data: IGetAllGenresRequestDTO): IGetAllGenresValidatedDataDTO {
    const validator = z.object({
      token: z.string().min(1, { message: 'Please put a valid token' }),
    });

    return validator.parse(data);
  }
}
