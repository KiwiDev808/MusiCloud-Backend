import { Genre } from '../../entities/Genre';
import { IGenresRepository } from '../IGenresRepository';
import { BaseRepository } from './BaseRepository';

export class MysqlGenresRepository
  extends BaseRepository
  implements IGenresRepository
{
  private connection = BaseRepository.connection();
  private genreTable = () => this.connection('musicloud_genres');
  constructor() {
    super();
  }

  async getAll(): Promise<Array<Genre>> {
    const result: Array<Genre> = await this.genreTable();

    return result;
  }

  async find(genres: string[]): Promise<Genre[]> {
    const result: Array<Genre> = await this.genreTable().whereIn('id', genres);
    return result;
  }

  async save(genre: Genre): Promise<void> {
    await this.genreTable().insert(genre);
  }

  async destroy(): Promise<void> {
    BaseRepository.destroy();
  }
}
