exports.up = knex => knex.schema.createTable('comments', t => {
	t.increments('id').index()
	
	t.integer('idea_id').references('ideas.id')
	t.text('content').notNullable()
})

exports.down = knex => knex.schema.dropTable('comments')
