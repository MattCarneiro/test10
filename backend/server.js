import Fastify from 'fastify'

    const fastify = Fastify({
      logger: true
    })

    fastify.get('/api', async (request, reply) => {
      return { message: 'Hello from Fastify!' }
    })

    const start = async () => {
      try {
        await fastify.listen({ port: 3001 })
        console.log('Server listening on http://localhost:3001')
      } catch (err) {
        fastify.log.error(err)
        process.exit(1)
      }
    }

    start()
