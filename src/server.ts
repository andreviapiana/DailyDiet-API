import fastify from 'fastify'
import { env } from './env'
import { usersRoutes } from './routes/users'

const app = fastify()

// Registrando plugins - rotas //
// O segundo parâmetro é o prefix -> que é o prefixo da url para ativar //
app.register(usersRoutes, { prefix: 'users' })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running at port ${env.PORT}`)
  })
