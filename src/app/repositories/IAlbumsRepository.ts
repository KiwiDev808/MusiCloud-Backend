import { Album } from '../entities/Album';

export interface IAlbumsRepository {
  getUserAlbums(id: string): Promise<Album[]>;
  find(id: string): Promise<Album>;
  save(album: Album): Promise<void>;
  destroy(): Promise<void>;
}
