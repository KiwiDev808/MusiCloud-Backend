import { Genre } from '../entities/Genre';

export interface IGenresRepository {
  getAll(): Promise<Genre[]>;
  find(genres: string[]): Promise<Genre[]>;
  save(genre: Genre): Promise<void>;
  destroy(): Promise<void>;
}
