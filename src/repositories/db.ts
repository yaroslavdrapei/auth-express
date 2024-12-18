import postgres from 'postgres';

const psql = postgres({
  host: process.env.PSQL_HOST,
  user: process.env.PSQL_USER,
  pass: process.env.PSQL_PASS,
  database: process.env.PSQL_DB,
  port: parseInt(process.env.PSQL_PORT as string)
});

export { psql };
