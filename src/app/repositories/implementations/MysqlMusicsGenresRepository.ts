import { Genre } from '../../entities/Genre';
import { Music } from '../../entities/Music';
import { MusicGenre } from '../../entities/MusicGenre';
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

  async find(music_id: string): Promise<string[]> {
    const result: Array<MusicGenre> = await this.musicGenresTable().where({
      music_id,
    });

    if (result.length > 0) {
      return result.map((musicGenre: MusicGenre) => musicGenre.genre_id);
    }

    return [];
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
