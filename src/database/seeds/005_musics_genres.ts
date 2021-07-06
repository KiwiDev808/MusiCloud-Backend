import { Knex } from 'knex';

const tableName = 'musicloud_musics_genres';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    { music_id: '001', genre_id: '001' },
    { music_id: '002', genre_id: '002' },
    { music_id: '003', genre_id: '003' },
  ]);
}
