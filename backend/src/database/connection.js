const knex = require('knex')
const config = require('../../knexfile')

/**
 * if to set our db for tests or development
 */

const env = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(env)

module.exports = connection;