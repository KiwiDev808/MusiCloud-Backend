import { Music } from '../../entities/Music';
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

  async getAll(): Promise<Array<Music>> {
    const result: Array<Music> = await this.musicTable();

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
