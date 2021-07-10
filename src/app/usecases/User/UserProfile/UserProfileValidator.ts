import { z } from 'zod';
import {
  IUserProfileRequestDTO,
  IUserProfileValidatedDataDTO,
} from './UserProfileDTO';

export class UserProfileValidator {
  validate(data: IUserProfileRequestDTO): IUserProfileValidatedDataDTO {
    const validator = z.object({
      token: z.string(),
    });

    return validator.parse(data);
  }
}
