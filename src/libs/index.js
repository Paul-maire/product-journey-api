const { PubSub } = require('apollo-server')

const pubsub = new PubSub()

module.exports = {
    ideas: require('./ideas'),
    comments: require('./comments'),
    pubsub,
}