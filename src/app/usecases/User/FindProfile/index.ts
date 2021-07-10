import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { FindProfileController } from './FindProfileController';
import { FindProfileUseCase } from './FindProfileUseCase';
import { FindProfileValidator } from './FindProfileValidator';

const mysqlUsersRepository = new MysqlUsersRepository();
const findProfileValidator = new FindProfileValidator();
const authenticator = new Authenticator();

const findProfileUseCase = new FindProfileUseCase(
  mysqlUsersRepository,
  findProfileValidator,
  authenticator,
);

const findProfileController = new FindProfileController(findProfileUseCase);

export { findProfileUseCase, findProfileController };
