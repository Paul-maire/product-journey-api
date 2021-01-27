const { Vote , Comment } = require('../models')
const casual = require('casual')

const votes = ({ id: idea_id }) => Vote.all({ idea_id })
const votes_count = ({ id: idea_id }) => Vote.count({ idea_id })
const vote = () => casual.coin_flip
const comments = ({ id: idea_id }) => Comment.all({ idea_id })

module.exports = {
    votes,
    votes_count,
    vote,
    comments,
}