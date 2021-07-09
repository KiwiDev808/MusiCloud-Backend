import { z } from 'zod';
import {
  ICreateMusicRequestDTO,
  ICreateMusicValidatedDataDTO,
} from './CreateMusicDTO';

export class CreateMusicValidator {
  validate(data: ICreateMusicRequestDTO): ICreateMusicValidatedDataDTO {
    const validator = z.object({
      title: z
        .string()
        .min(5, { message: 'Must be 5 or more characters long' }),
      file: z.string().url({ message: 'Please put a valid url' }),
      genres: z.array(z.string()),
      album_id: z.string(),
      token: z.string().min(1, { message: 'Please put a valid token' }),
    });

    return validator.parse(data);
  }
}
