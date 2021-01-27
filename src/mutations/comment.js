const { comments } = require('../libs')

const { pubsub } = require('../libs')

const saveComment = (_, { comment }) => {
    pubsub.publish('commentAdded', { commentAdded: comment })
    return comments.save(comment)
}

module.exports = {
    saveComment,
}