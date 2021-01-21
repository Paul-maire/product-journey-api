const { Idea } = require('../models')

const ideas = _ => Idea.all()

const idea = (_, { id }) => Idea.find({ id })

module.exports = {
    ideas,
    idea,
}