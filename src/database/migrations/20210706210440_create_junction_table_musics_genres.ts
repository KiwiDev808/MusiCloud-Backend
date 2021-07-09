import { Knex } from 'knex';

const tableName = 'musicloud_musics_genres';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(tableName, table => {
    table.string('music_id').notNullable();
    table.string('genre_id').notNullable();
    table.primary(['music_id', 'genre_id']);
    table
      .foreign('music_id')
      .references('id')
      .inTable('musicloud_musics')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .foreign('genre_id')
      .references('id')
      .inTable('musicloud_genres')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(tableName);
}
