import { z } from 'zod';
import {
  IFindMusicByIdRequestDTO,
  IFindMusicByIdValidatedDataDTO,
} from './FindMusicByIdDTO';

export class FindMusicByIdValidator {
  validate(data: IFindMusicByIdRequestDTO): IFindMusicByIdValidatedDataDTO {
    const validator = z.object({
      token: z.string().min(1, { message: 'Please put a valid token' }),
      id: z.string(),
    });

    return validator.parse(data);
  }
}
