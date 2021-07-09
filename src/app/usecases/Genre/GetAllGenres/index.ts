import { MysqlGenresRepository } from '../../../repositories/implementations/MysqlGenresRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { GetAllGenresController } from './GetAllGenresController';
import { GetAllGenresUseCase } from './GetAllGenresUseCase';
import { GetAllGenresValidator } from './GetAllGenresValidator';

const mysqlGenresRepository = new MysqlGenresRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const getAllGenresValidator = new GetAllGenresValidator();
const authenticator = new Authenticator();

const getAllGenresUseCase = new GetAllGenresUseCase(
  mysqlGenresRepository,
  mysqlUsersRepository,
  getAllGenresValidator,
  authenticator,
);

const getAllGenresController = new GetAllGenresController(getAllGenresUseCase);

export { getAllGenresUseCase, getAllGenresController };
