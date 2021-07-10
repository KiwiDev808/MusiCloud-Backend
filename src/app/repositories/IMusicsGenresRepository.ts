import { Genre } from '../entities/Genre';
import { Music } from '../entities/Music';

export interface IMusicsGenresRepository {
  save(music: Music, genres: Genre[]): Promise<void>;
  find(music_id: string): Promise<string[]>;
  destroy(): Promise<void>;
}
