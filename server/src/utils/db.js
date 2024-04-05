'use strict';

require('dotenv/config');

const pg = require('pg');

const { Sequelize } = require('sequelize');

// const db = new Sequelize(process.env.POSTGRES_URL);

// const db = new Sequelize({
//   connectionString: process.env.POSTGRES_URL,
//   dialect: 'postgres',
//   logging: false,
// });

const db = new Sequelize(process.env.POSTGRES_UR, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
});

module.exports = { db };
