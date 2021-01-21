const { ideas } = require('../libs')

const saveIdea = (_, { idea }) => ideas.save(idea)

module.exports = {
    saveIdea,
}