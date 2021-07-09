import { z } from 'zod';
import {
  ICreateGenreRequestDTO,
  ICreateGenreValidatedDataDTO,
} from './CreateGenreDTO';

export class CreateGenreValidator {
  validate(data: ICreateGenreRequestDTO): ICreateGenreValidatedDataDTO {
    const validator = z.object({
      name: z
        .string()
        .min(2, { message: 'Name must have 2 or more characters' }),
      token: z.string().min(1, { message: 'Please put a valid token' }),
    });

    return validator.parse(data);
  }
}
