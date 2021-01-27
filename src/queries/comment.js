const { Comment } = require('../models')

const comments = (_, {idea_id}) => Comment.all({ idea_id })

// const comment = (_, { id }) => Comment.find({ id })

module.exports = {
    comments,
    // comment,
}