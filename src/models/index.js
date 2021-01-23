const config = require('../../knexfile.js')
const knex = require('knex')(config)

module.exports = {
  Idea: require('./idea')(knex),
  Vote: require('./vote')(knex),
}
