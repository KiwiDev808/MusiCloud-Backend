import { MysqlGenresRepository } from '../../../repositories/implementations/MysqlGenresRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import { CreateGenreController } from './CreateGenreController';
import { CreateGenreUseCase } from './CreateGenreUseCase';
import { CreateGenreValidator } from './CreateGenreValidator';

const mysqlGenresRepository = new MysqlGenresRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const createGenreValidator = new CreateGenreValidator();
const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

const createGenreUseCase = new CreateGenreUseCase(
  mysqlGenresRepository,
  mysqlUsersRepository,
  createGenreValidator,
  idGenerator,
  authenticator,
);

const createGenreController = new CreateGenreController(createGenreUseCase);

export { createGenreUseCase, createGenreController };
