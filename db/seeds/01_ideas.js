const casual = require('casual').fr_FR

const ideas = [
    { id: 1, title: 'Add new filters', content: casual.text},
    { id: 2, title: ':Tada: on completed task', content: casual.text},
]

exports.seed = knex => {
    return knex('ideas')
        .del()
        .then(_ => knex('ideas').insert(ideas))
}
