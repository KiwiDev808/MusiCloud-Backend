import { Genre } from '../entities/Genre';
import { Music } from '../entities/Music';

export interface IMusicsGenresRepository {
  save(music: Music, genres: Genre[]): Promise<void>;
  destroy(): Promise<void>;
}
