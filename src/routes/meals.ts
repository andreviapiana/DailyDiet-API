import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto from 'node:crypto'
import { z } from 'zod'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function mealsRoutes(app: FastifyInstance) {
  // Listando todas refeições do Usuário //
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },

    async (request) => {
      const { sessionId } = request.cookies

      const [user] = await knex('users')
        .where('session_id', sessionId)
        .select('id')

      const userId = user.id

      // .where('user_id', userId) -> Selecionar apenas onde a coluna user_id seja correspondende ao id do usuário que criou o prato //
      const meals = await knex('meals').where('user_id', userId).select()

      return { meals }
    },
  )

  // Listando refeições pelo ID //
  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },

    async (request, response) => {
      const getMealsParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getMealsParamsSchema.parse(request.params)
      const { sessionId } = request.cookies

      const [user] = await knex('users')
        .where('session_id', sessionId)
        .select('id')

      const userId = user.id

      const meal = await knex('meals')
        .where('id', id)
        .andWhere('user_id', userId)
        .first()

      if (!meal) {
        return response.status(404).send({
          error: 'Refeição não encontrada',
        })
      }

      return {
        meal,
      }
    },
  )

  app.get('/summary', async (request) => {
    // Buscando o usuário
    const { sessionId } = request.cookies

    const [user] = await knex('users')
      .where('session_id', sessionId)
      .select('id')

    const userId = user.id

    const [count] = await knex('meals')
      .count('id', {
        as: 'Total de refeições registradas',
      })
      .where('user_id', userId)

    const refDieta = await knex('meals')
      .count('id', { as: 'Total de refeições dentro da dieta' })
      .where('isOnTheDiet', true)
      .andWhere('user_id', userId)

    const refForaDieta = await knex('meals')
      .count('id', { as: 'Total de refeições fora da dieta' })
      .where('isOnTheDiet', false)
      .andWhere('user_id', userId)

    const summary = {
      'Total de refeições registradas': parseInt(
        JSON.parse(JSON.stringify(count))['Total de refeições registradas'],
      ),
      'Total de refeições dentro da dieta': parseInt(
        JSON.parse(JSON.stringify(refDieta))[0][
          'Total de refeições dentro da dieta'
        ],
      ),
      'Total de refeições fora da dieta': parseInt(
        JSON.parse(JSON.stringify(refForaDieta))[0][
          'Total de refeições fora da dieta'
        ],
      ),
    }
    return {
      summary,
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
