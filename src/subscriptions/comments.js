const { pubsub } = require('../libs')

module.exports = {
    commentAdded: {
      subscribe: () => console.log('subscriptions:commentAdded') || pubsub.asyncIterator('commentAdded'),
    },
}