import { User } from '../entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findByNickname(nickname: string): Promise<User>;
  findByEmailOrNickname(email: string, nickname: string): Promise<User>;
  save(user: User): Promise<void>;
  findById(id: string): Promise<User>;
  destroy(): Promise<void>;
}
