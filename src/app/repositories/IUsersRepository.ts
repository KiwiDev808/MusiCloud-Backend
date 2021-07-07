import { User } from '../entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  find(id: string): Promise<User>;
  destroy(): Promise<void>;
}
