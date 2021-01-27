const config = require('../../knexfile.js')
const knex = require('knex')(config)

module.exports = {
  Comment: require('./comment')(knex),
  Idea: require('./idea')(knex),
  Vote: require('./vote')(knex),
}
