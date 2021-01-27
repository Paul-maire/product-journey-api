const { Comment } = require('../../models')

module.exports = comment => Comment.save(comment)