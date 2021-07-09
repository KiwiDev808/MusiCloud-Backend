import { MysqlMusicsRepository } from '../../../repositories/implementations/MysqlMusicsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { GetAllMusicsController } from './GetAllMusicsController';
import { GetAllMusicsUseCase } from './GetAllMusicsUseCase';
import { GetAllMusicsValidator } from './GetAllMusicsValidator';

const mysqlMusicsRepository = new MysqlMusicsRepository();

const mysqlUsersRepository = new MysqlUsersRepository();

const getAllMusicsValidator = new GetAllMusicsValidator();
const authenticator = new Authenticator();

const getAllMusicsUseCase = new GetAllMusicsUseCase(
  mysqlMusicsRepository,
  mysqlUsersRepository,
  getAllMusicsValidator,
  authenticator,
);

const getAllMusicsController = new GetAllMusicsController(getAllMusicsUseCase);

export { getAllMusicsUseCase, getAllMusicsController };
