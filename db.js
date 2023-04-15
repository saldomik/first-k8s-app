const { POSTGRES_DB_NAME, POSTGRES_DB_PASSWORD, POSTGRES_DB_USER, POSTGRES_HOST } = require('./config');

const pgp = require('pg-promise')();

const db = pgp(`postgres://${POSTGRES_DB_USER}:${POSTGRES_DB_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DB_NAME}`);

module.exports = db;