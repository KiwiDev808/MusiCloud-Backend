import { MysqlAlbumsRepository } from '../../../repositories/implementations/MysqlAlbumsRepository';
import { MysqlGenresRepository } from '../../../repositories/implementations/MysqlGenresRepository';
import { MysqlMusicsGenresRepository } from '../../../repositories/implementations/MysqlMusicsGenresRepository';
import { MysqlMusicsRepository } from '../../../repositories/implementations/MysqlMusicsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { FindMusicByIdController } from './FindMusicByIdController';
import { FindMusicByIdUseCase } from './FindMusicByIdUseCase';
import { FindMusicByIdValidator } from './FindMusicByIdValidator';

const mysqlMusicsRepository = new MysqlMusicsRepository();

const mysqlUsersRepository = new MysqlUsersRepository();
const mysqlGenresRepository = new MysqlGenresRepository();
const mysqlMusicsGenresRepository = new MysqlMusicsGenresRepository();
const mysqlAlbumsRepository = new MysqlAlbumsRepository();

const findMusicByIdValidator = new FindMusicByIdValidator();
const authenticator = new Authenticator();

const findMusicByIdUseCase = new FindMusicByIdUseCase(
  mysqlMusicsRepository,
  mysqlAlbumsRepository,
  mysqlGenresRepository,
  mysqlMusicsGenresRepository,
  mysqlUsersRepository,
  findMusicByIdValidator,
  authenticator,
);

const findMusicByIdController = new FindMusicByIdController(
  findMusicByIdUseCase,
);

export { findMusicByIdUseCase, findMusicByIdController };
