import { Knex } from 'knex';

const tableName = 'musicloud_users';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    {
      id: '001',
      name: 'labenuser',
      email: 'labenuser@labenu.com',
      password: '123456',
      role: 'NORMAL',
    },
    {
      id: '002',
      name: 'labebot',
      email: 'labebot@email.com',
      password: '123456',
      role: 'NORMAL',
    },
    {
      id: '003',
      name: 'labe@labe.com',
      email: 'labefake@fake.com',
      password: '123456',
      role: 'NORMAL',
    },
  ]);
}
