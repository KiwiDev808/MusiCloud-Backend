// Update with your config settings.
import {
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA,
  DB_USER,
} from './src/config';

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_SCHEMA,
      port: DB_PORT || 3306,
      multipleStatements: true,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_SCHEMA,
      port: DB_PORT || 3306,
      multipleStatements: true,
    },
  },
};
