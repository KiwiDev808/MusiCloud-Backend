import { z } from 'zod';
import {
  IFindProfileRequestDTO,
  IFindProfileValidatedDataDTO,
} from './FindProfileDTO';

export class FindProfileValidator {
  validate(data: IFindProfileRequestDTO): IFindProfileValidatedDataDTO {
    const validator = z.object({
      token: z.string(),
      id: z.string(),
    });

    return validator.parse(data);
  }
}
