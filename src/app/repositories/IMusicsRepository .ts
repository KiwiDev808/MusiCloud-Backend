import { Music } from '../entities/Music';

export interface IMusicsRepository {
  getAll(): Promise<Music[]>;
  find(id: string): Promise<Music>;
  save(music: Music): Promise<void>;
  destroy(): Promise<void>;
}
