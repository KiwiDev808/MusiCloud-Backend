import { Music } from '../entities/Music';

export interface IMusicsRepository {
  getAll(id: string): Promise<Music[]>;
  save(music: Music): Promise<void>;
  destroy(): Promise<void>;
}
