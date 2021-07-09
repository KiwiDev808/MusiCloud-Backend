import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { BaseRepository } from './BaseRepository';

export class MysqlUsersRepository
  extends BaseRepository
  implements IUsersRepository
{
  private connection = BaseRepository.connection();
  private userTable = () => this.connection('musicloud_users');
  constructor() {
    super();
  }

  async findById(id: string): Promise<User> {
    const result: Array<User> = await this.userTable().where({
      id,
    });
    return result[0];
  }

  async findByEmail(email: string): Promise<User> {
    const result: Array<User> = await this.userTable().where({
      email,
    });
    return result[0];
  }

  async findByNickname(nickname: string): Promise<User> {
    const result: Array<User> = await this.userTable().where({
      nickname,
    });
    return result[0];
  }

  async findByEmailOrNickname(email: string, nickname: string): Promise<User> {
    const result: Array<User> = await this.userTable()
      .where({
        email,
      })
      .orWhere({
        nickname,
      });
    return result[0];
  }

  async save(user: User): Promise<void> {
    await this.userTable().insert(user);
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
