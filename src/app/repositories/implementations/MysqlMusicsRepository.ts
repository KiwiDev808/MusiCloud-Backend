import { Music } from '../../entities/Music';
import { MusicWithAuthor } from '../../types/MusicDTO';
import { IMusicsRepository } from '../IMusicsRepository ';
import { BaseRepository } from './BaseRepository';

export class MysqlMusicsRepository
  extends BaseRepository
  implements IMusicsRepository
{
  private connection = BaseRepository.connection();
  private musicTable = () => this.connection('musicloud_musics');
  constructor() {
    super();
  }

  async getAll(): Promise<Array<MusicWithAuthor>> {
    const result: Array<MusicWithAuthor> = await this.musicTable()
      .join(
        'musicloud_users',
        'musicloud_musics.user_id',
        '=',
        'musicloud_users.id',
      )
      .select(
        'musicloud_musics.id',
        'musicloud_musics.title',
        'musicloud_musics.file',
        'musicloud_users.name as author',
        'musicloud_musics.user_id',
        'musicloud_musics.album_id',
        'musicloud_musics.date',
      );

    return result;
  }

  async find(id: string): Promise<Music> {
    const result: Array<Music> = await this.musicTable().where({
      id,
    });
    return result[0];
  }

  async save(music: Music): Promise<void> {
    await this.musicTable().insert(music);
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
