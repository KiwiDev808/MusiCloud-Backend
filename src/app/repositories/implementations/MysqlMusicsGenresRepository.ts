import { Genre } from '../../entities/Genre';
import { Music } from '../../entities/Music';
import { IMusicsGenresRepository } from '../IMusicsGenresRepository';
import { BaseRepository } from './BaseRepository';

export class MysqlMusicsGenresRepository
  extends BaseRepository
  implements IMusicsGenresRepository
{
  private connection = BaseRepository.connection();
  private musicGenresTable = () => this.connection('musicloud_musics_genres');
  constructor() {
    super();
  }

  async save(music: Music, genres: Genre[]): Promise<void> {
    const values = genres.map(genre => {
      return {
        music_id: music.id,
        genre_id: genre.id,
      };
    });
    await this.musicGenresTable().insert(values);
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
