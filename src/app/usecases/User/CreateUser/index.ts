import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { HashManager } from '../../../services/HashManager';
import { IdGenerator } from '../../../services/IdGenerator';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserValidator } from './CreateUserValidator';

const mysqlUsersRepository = new MysqlUsersRepository();
const createUserValidator = new CreateUserValidator();
const idGenerator = new IdGenerator();
const hashManager = new HashManager();
const authenticator = new Authenticator();

const createUsersUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  createUserValidator,
  idGenerator,
  hashManager,
  authenticator,
);

const createUserController = new CreateUserController(createUsersUseCase);

export { createUsersUseCase, createUserController };
