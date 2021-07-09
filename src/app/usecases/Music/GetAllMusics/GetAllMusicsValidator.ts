import { z } from 'zod';
import {
  IGetAllMusicsRequestDTO,
  IGetAllMusicsValidatedDataDTO,
} from './GetAllMusicsDTO';

export class GetAllMusicsValidator {
  validate(data: IGetAllMusicsRequestDTO): IGetAllMusicsValidatedDataDTO {
    const validator = z.object({
      token: z.string().min(1, { message: 'Please put a valid token' }),
    });

    return validator.parse(data);
  }
}
