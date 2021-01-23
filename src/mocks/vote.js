const casual = require('casual').fr_FR

module.exports = params => ({
    id: params ? params.id : casual.integer(0, 100),
    idea_id: casual.integer(0, 100),
    vote: casual.coin_flip
}) 