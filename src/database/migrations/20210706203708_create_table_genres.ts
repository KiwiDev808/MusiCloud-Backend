import { Knex } from 'knex';

const tableName = 'musicloud_genres';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      return knex.schema.createTable(tableName, table => {
        table.string('id').primary().notNullable();
        table.string('name').notNullable();
      });
    }
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
