exports.up = knex => knex.schema.createTable('ideas', t => {
	t.increments('id').index()
	
	t.string('title').notNullable()
	t.text('content').notNullable()
})

exports.down = knex => knex.schema.dropTable('ideas')
