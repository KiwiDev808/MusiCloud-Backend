import { Knex } from 'knex';

const tableName = 'musicloud_musics';

export async function up(knex: Knex): Promise<void> {
  knex.schema.hasTable(tableName).then(exists => {
    if (!exists) {
      return knex.schema.createTable(tableName, table => {
        table.string('id').primary().notNullable();
        table.string('title').notNullable();
        table.string('file').notNullable();
        table.string('user_id').notNullable();
        table.string('album_id').notNullable();
        table
          .foreign('user_id')
          .references('id')
          .inTable('musicloud_users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        table
          .foreign('album_id')
          .references('id')
          .inTable('musicloud_albums')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        table.string('date').notNullable();
      });
    }
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
