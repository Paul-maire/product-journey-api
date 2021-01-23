const { MockList } = require('apollo-server');

module.exports = {
    Idea: require('./idea'),
    Query: () => ({
        ideas: () => new MockList([0, 20])
    })
}