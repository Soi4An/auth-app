'use strict';

require('dotenv/config');

const pg = require('pg');
const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
});

module.exports = { db };
