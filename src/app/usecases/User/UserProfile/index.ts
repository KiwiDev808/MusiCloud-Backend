import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { UserProfileController } from './UserProfileController';
import { UserProfileUseCase } from './UserProfileUseCase';
import { UserProfileValidator } from './UserProfileValidator';

const mysqlUsersRepository = new MysqlUsersRepository();
const userProfileValidator = new UserProfileValidator();
const authenticator = new Authenticator();

const userProfileUseCase = new UserProfileUseCase(
  mysqlUsersRepository,
  userProfileValidator,
  authenticator,
);

const userProfileController = new UserProfileController(userProfileUseCase);

export { userProfileUseCase, userProfileController };
