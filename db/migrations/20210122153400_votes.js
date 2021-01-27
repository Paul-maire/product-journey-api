exports.up = knex => knex.schema.createTable('votes', t => {
	t.increments('id').index()
	
	t.integer('idea_id').references('ideas.id')
})

exports.down = knex => knex.schema.dropTable('votes')
