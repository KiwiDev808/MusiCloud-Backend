import { MysqlAlbumsRepository } from '../../../repositories/implementations/MysqlAlbumsRepository';
import { MysqlUsersRepository } from '../../../repositories/implementations/MysqlUsersRepository';
import { Authenticator } from '../../../services/Authenticator';
import { IdGenerator } from '../../../services/IdGenerator';
import { CreateAlbumController } from './CreateAlbumController';
import { CreateAlbumUseCase } from './CreateAlbumUseCase';
import { CreateAlbumValidator } from './CreateAlbumValidator';

const mysqlAlbumsRepository = new MysqlAlbumsRepository();
const mysqlUsersRepository = new MysqlUsersRepository();

const createAlbumValidator = new CreateAlbumValidator();
const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

const createAlbumUseCase = new CreateAlbumUseCase(
  mysqlAlbumsRepository,
  mysqlUsersRepository,
  createAlbumValidator,
  idGenerator,
  authenticator,
);

const createAlbumController = new CreateAlbumController(createAlbumUseCase);

export { createAlbumUseCase, createAlbumController };
