import { Knex } from 'knex';

const tableName = 'musicloud_albums';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    { id: '001', name: 'Musicas calmas', user_id: '001' },
    { id: '002', name: 'Musicas pra agitar', user_id: '001' },
    { id: '003', name: 'Praia', user_id: '003' },
  ]);
}
