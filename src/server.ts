import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  const user = await knex('users')
    .insert({
      id: crypto.randomUUID(),
      name: 'André',
      email: 1000,
      address: 'Endereço de Teste',
      weight: 750.15,
      height: 180,
    })
    .returning('*')

  return user
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
