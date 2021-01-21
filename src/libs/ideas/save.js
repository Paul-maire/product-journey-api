const { Idea } = require('../../models')

const save = idea => Idea.save(idea)

module.exports = save