import dotenv from 'dotenv';
import { default as knex, Knex } from 'knex';
import { DB_HOST, DB_PASSWORD, DB_SCHEMA, DB_USER } from '../config';

dotenv.config();

export class DatabaseConnection {
  protected static connection: Knex = knex({
    client: 'mysql',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_SCHEMA,
      port: 3306,
      multipleStatements: true,
    },
  });

  protected static destroy() {
    knex({
      client: 'mysql',
      connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_SCHEMA,
        port: 3306,
        multipleStatements: true,
      },
    }).destroy();
  }
}
