import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const fastify = Fastify({ logger: true })
const prisma = new PrismaClient()

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log('🚀 Servidor rodando em http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
