module.exports = table => knex => ({
	// Methods
	all(where = null) {
		const query = this.table()
			.select('*')

		if (where)
			query.where(where)

		return query
	},
	find(where) {
		return this.table()
			.select('*')
			.first()
			.where(where)
	},
	async insert(entity) {
		const [ result ] = await this.table()
			.insert(entity, '*')

		return result
	},
	async update(where, entity) {
		const [ result ] = await this.table()
			.update(entity, '*')
			.where(where)

		return result
	},
	save(entity, where) {
		return where
			? this.update(where, entity)
			: this.insert(entity)
	},
	count(where) {
		return this.table()
			.select('id')
			.where(where)
			.count('id')
	},
	// Utils
	table: _ => knex(table)
})