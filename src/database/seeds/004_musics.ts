import * as faker from 'faker';
import { Knex } from 'knex';

const tableName = 'musicloud_musics';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    {
      id: '001',
      title: faker.lorem.word(),
      file: faker.internet.url(),
      user_id: '001',
      album_id: '001',
      date: Date.now().toString(),
    },
    {
      id: '002',
      title: faker.lorem.word(),
      file: faker.internet.url(),
      user_id: '002',
      album_id: '002',
      date: Date.now().toString(),
    },
    {
      id: '003',
      title: faker.lorem.word(),
      file: faker.internet.url(),
      user_id: '003',
      album_id: '003',
      date: Date.now().toString(),
    },
  ]);
}
