import { afterAll, beforeAll, test, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Users routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  test('é possível criar um novo usuário?', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'André Leandro',
        email: 'teste@hotmail.com',
        address: 'Endereço de Teste',
        weight: 750.15,
        height: 180,
      })
      .expect(201)
  })
})
