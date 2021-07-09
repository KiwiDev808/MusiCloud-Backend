import { Knex } from 'knex';

const tableName = 'musicloud_albums';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, table => {
    table.string('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('user_id').notNullable();
    table
      .foreign('user_id')
      .references('id')
      .inTable('musicloud_users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
