import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUserRepository';
import { Authenticator } from '../../../services/Authenticator';
import { HashManager } from '../../../services/HashManager';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { AuthenticateUserValidator } from './AuthenticateUserValidator';

const mysqlUsersRepository = new MysqlUsersRepository();
const authenticateUserValidator = new AuthenticateUserValidator();
const hashManager = new HashManager();
const authenticator = new Authenticator();

const authenticateUsersUseCase = new AuthenticateUserUseCase(
  mysqlUsersRepository,
  authenticateUserValidator,
  hashManager,
  authenticator,
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUsersUseCase,
);

export { authenticateUsersUseCase, authenticateUserController };
