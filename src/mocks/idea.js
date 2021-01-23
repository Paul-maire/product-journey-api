const casual = require('casual').fr_FR
const { MockList } = require('apollo-server')

module.exports = params => ({
    id: params ? params.id : casual.integer(0, 100),
    title: casual.title,
    content: casual.sentences(n = 100),
    votes_count: casual.integer(0, 1000),

    comments: () => new MockList([1, 20])
}) 