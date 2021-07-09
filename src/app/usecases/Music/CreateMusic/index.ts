import { MysqlAlbumsRepository } from '../../../repositories/implementations/MysqlAlbumsRepository';
import { MysqlGenresRepository } from '../../../repositories/implementations/MysqlGenresRepository';
import { MysqlMusicsGenresRepository } from '../../../repositories/implementations/MysqlMusicsGenresRepository';
import { MysqlMusicsRepository } from '../../../repositories/implementations/MysqlMusicsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import { CreateMusicController } from './CreateMusicController';
import { CreateMusicUseCase } from './CreateMusicUseCase';
import { CreateMusicValidator } from './CreateMusicValidator';

const mysqlMusicsRepository = new MysqlMusicsRepository();
const mysqlGenresRepository = new MysqlGenresRepository();
const mysqlMusicsGenresRepository = new MysqlMusicsGenresRepository();
const mysqlAlbumsRepository = new MysqlAlbumsRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const createMusicValidator = new CreateMusicValidator();
const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

const createMusicUseCase = new CreateMusicUseCase(
  mysqlMusicsRepository,
  mysqlGenresRepository,
  mysqlMusicsGenresRepository,
  mysqlAlbumsRepository,
  mysqlUsersRepository,
  createMusicValidator,
  idGenerator,
  authenticator,
);

const createMusicController = new CreateMusicController(createMusicUseCase);

export { createMusicUseCase, createMusicController };
