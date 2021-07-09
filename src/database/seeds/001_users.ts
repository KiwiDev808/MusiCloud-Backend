import { Knex } from 'knex';
import { HashManager } from '../../app/services/HashManager';
const hashManager = new HashManager();

const tableName = 'musicloud_users';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // Inserts seed entries
  await knex(tableName).insert([
    {
      id: '001',
      name: 'labenuser',
      nickname: 'labenuser',
      email: 'labenuser@labenu.com',
      password: await hashManager.hash('123456'),
      role: 'NORMAL',
    },
    {
      id: '002',
      name: 'labebot',
      nickname: 'labebot',
      email: 'labebot@email.com',
      password: await hashManager.hash('123456'),
      role: 'NORMAL',
    },
    {
      id: '003',
      name: 'labe@labe.com',
      nickname: 'labe@labe.com',
      email: 'labefake@fake.com',
      password: await hashManager.hash('123456'),
      role: 'NORMAL',
    },
  ]);
}
