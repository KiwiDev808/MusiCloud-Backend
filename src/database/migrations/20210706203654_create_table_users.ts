import { Knex } from 'knex';

const tableName = 'musicloud_users';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      return knex.schema.createTable(tableName, table => {
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.enum('role', ['ADMIN', 'NORMAL']).defaultTo('NORMAL');
      });
    }
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
