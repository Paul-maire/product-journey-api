const { MockList } = require('apollo-server')

module.exports = {
    Idea: require('./idea'),
    Comment: require('./comment'),
    Query: () => ({
        ideas: () => new MockList([0, 20])
    })
}