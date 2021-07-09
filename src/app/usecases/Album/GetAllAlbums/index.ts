import { MysqlAlbumsRepository } from '../../../repositories/implementations/MysqlAlbumsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { GetAllAlbumsController } from './GetAllAlbumsController';
import { GetAllAlbumsUseCase } from './GetAllAlbumsUseCase';
import { GetAllAlbumsValidator } from './GetAllAlbumsValidator';

const mysqlAlbumsRepository = new MysqlAlbumsRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const getAllAlbumsValidator = new GetAllAlbumsValidator();
const authenticator = new Authenticator();

const getAllAlbumsUseCase = new GetAllAlbumsUseCase(
  mysqlAlbumsRepository,
  mysqlUsersRepository,
  getAllAlbumsValidator,
  authenticator,
);

const getAllAlbumsController = new GetAllAlbumsController(getAllAlbumsUseCase);

export { getAllAlbumsUseCase, getAllAlbumsController };
