import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto, { randomUUID } from 'node:crypto'
import { z } from 'zod'

export async function mealsRoutes(app: FastifyInstance) {
  // Listando todas refeições //
  app.get('/', async () => {
    const meals = await knex('meals').select()

    return { meals }
  })

  // Listando refeições pelo ID //
  app.get('/:id', async (request) => {
    const getMealsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getMealsParamsSchema.parse(request.params)

    const meal = await knex('meals').where('id', id).first()

    return {
      meal,
    }
  })

  // Criando Refeição //
  app.post('/', async (request, response) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      isOnTheDiet: z.boolean(),
    })

    const { name, description, isOnTheDiet } = createMealBodySchema.parse(
      request.body,
    )

    // Só vai liberar a criação da refeição se existir o Cookie //
    const sessionId = request.cookies.sessionId

    if (!sessionId) {
      return response.status(401).send({
        error: 'Unauthorized',
      })
    }

    // A partir deste sessionID, buscar os dados na tabela users para adicionar durante a criação de uma nova refeição na tabela meals //
    const [user] = await knex('users')
      .where('session_id', sessionId)
      .select('id')

    const userId = user.id

    await knex('meals').insert({
      id: crypto.randomUUID(),
      user_id: userId,
      name,
      description,
      isOnTheDiet,
    })

    return response.status(201).send()
  })
}
