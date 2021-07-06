import { Knex } from 'knex';

const tableName = 'musicloud_genres';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    { id: '001', name: 'Rock' },
    { id: '002', name: 'Reggae' },
    { id: '003', name: 'Pagode' },
    { id: '004', name: 'Pop' },
    { id: '005', name: 'Gospel' },
    { id: '006', name: 'Sertanejo' },
  ]);
}
