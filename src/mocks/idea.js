const casual = require('casual').fr_FR

module.exports = params => ({
    id: params ? params.id : casual.integer(0, 100),
    title: casual.title,
    content: casual.text,
    votes_count: casual.integer(0, 1000)
}) 