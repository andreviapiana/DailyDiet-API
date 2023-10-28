import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto from 'node:crypto'
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

    await knex('meals').insert({
      id: crypto.randomUUID(),
      user_id: crypto.randomUUID(), // gerando um id aleatório de user por enquanto
      name,
      description,
      isOnTheDiet,
    })

    return response.status(201).send()
  })
}
