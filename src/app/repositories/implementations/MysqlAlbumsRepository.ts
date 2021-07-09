import { Album } from '../../entities/Album';
import { IAlbumsRepository } from '../IAlbumsRepository';
import { BaseRepository } from './BaseRepository';

export class MysqlAlbumsRepository
  extends BaseRepository
  implements IAlbumsRepository
{
  private connection = BaseRepository.connection();
  private albumTable = () => this.connection('musicloud_albums');
  constructor() {
    super();
  }

  async getUserAlbums(user_id: string): Promise<Array<Album>> {
    const result: Array<Album> = await this.albumTable().where({ user_id });

    return result;
  }

  async find(id: string): Promise<Album> {
    const result: Array<Album> = await this.albumTable().where({ id });
    return result[0];
  }

  async save(album: Album): Promise<void> {
    await this.albumTable().insert(album);
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
