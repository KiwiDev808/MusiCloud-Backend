import { Album } from '../entities/Album';

export interface IMusicsRepository {
  getAll(id: string): Promise<Album[]>;
  save(album: Album): Promise<void>;
}
