import { Music } from '../entities/Music';
import { MusicWithAuthor } from '../types/MusicDTO';

export interface IMusicsRepository {
  getAll(): Promise<MusicWithAuthor[]>;
  find(id: string): Promise<MusicWithAuthor>;
  save(music: Music): Promise<void>;
  destroy(): Promise<void>;
}
