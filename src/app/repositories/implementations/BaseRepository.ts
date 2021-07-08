import dotenv from 'dotenv';
import { default as knex, Knex } from 'knex';
import {
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_SCHEMA,
  DB_USER,
} from '../../../config';

dotenv.config();

export class BaseRepository {
  private static dbConnection: Knex | null;
  protected static connection(): Knex {
    if (!this.dbConnection) {
      this.dbConnection = knex({
        client: 'mysql',
        connection: {
          host: DB_HOST,
          user: DB_USER,
          password: DB_PASSWORD,
          database: DB_SCHEMA,
          port: DB_PORT || 3306,
          multipleStatements: true,
        },
      });
    }

    return this.dbConnection;
  }

  protected static async destroy(): Promise<void> {
    if (this.dbConnection) {
      await this.dbConnection.destroy();
      this.dbConnection = null;
    }
    return;
  }
}
