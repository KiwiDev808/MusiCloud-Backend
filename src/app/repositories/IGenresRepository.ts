import { Genre } from '../entities/Genre';

export interface IMusicsRepository {
  getAll(id: string): Promise<Genre[]>;
  save(genre: Genre): Promise<void>;
  destroy(): Promise<void>;
}
