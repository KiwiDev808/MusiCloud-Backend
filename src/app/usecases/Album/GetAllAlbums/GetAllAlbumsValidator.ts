import { z } from 'zod';
import {
  IGetAllAlbumsRequestDTO,
  IGetAllAlbumsValidatedDataDTO,
} from './GetAllAlbumsDTO';

export class GetAllAlbumsValidator {
  validate(data: IGetAllAlbumsRequestDTO): IGetAllAlbumsValidatedDataDTO {
    const validator = z.object({
      token: z.string().min(1, { message: 'Please put a valid token' }),
    });

    return validator.parse(data);
  }
}
