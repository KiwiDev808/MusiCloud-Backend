import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_HOST = String(process.env.DB_HOST);
const DB_USER = String(process.env.DB_USER);
const DB_PASSWORD = String(process.env.DB_PASSWORD);
const DB_SCHEMA = String(process.env.DB_SCHEMA);
const DB_PORT = Number(process.env.DB_PORT);
const BCRYPT_COST = process.env.BCRYPT_COST;
const JWT_KEY = process.env.JWT_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export {
  PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_SCHEMA,
  DB_USER,
  DB_PORT,
  BCRYPT_COST,
  JWT_EXPIRES_IN,
  JWT_KEY,
};
