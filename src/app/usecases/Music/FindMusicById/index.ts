import { MysqlMusicsRepository } from '../../../repositories/implementations/MysqlMusicsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { FindMusicByIdController } from './FindMusicByIdController';
import { FindMusicByIdUseCase } from './FindMusicByIdUseCase';
import { FindMusicByIdValidator } from './FindMusicByIdValidator';

const mysqlMusicsRepository = new MysqlMusicsRepository();

const mysqlUsersRepository = new MysqlUsersRepository();

const findMusicByIdValidator = new FindMusicByIdValidator();
const authenticator = new Authenticator();

const findMusicByIdUseCase = new FindMusicByIdUseCase(
  mysqlMusicsRepository,
  mysqlUsersRepository,
  findMusicByIdValidator,
  authenticator,
);

const findMusicByIdController = new FindMusicByIdController(
  findMusicByIdUseCase,
);

export { findMusicByIdUseCase, findMusicByIdController };
