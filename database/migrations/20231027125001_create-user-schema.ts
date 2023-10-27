import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary()
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('address').notNullable()
    table.decimal('weight', 5, 2).notNullable() // O número 5 indica o total de dígitos e o 2 é o número de casas decimais //
    table.integer('height').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users')
}
