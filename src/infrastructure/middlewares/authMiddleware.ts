// src/middleware/authHook.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { verifyToken } from '../../utils/verifyToken' 

export const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authHeader = request.headers['authorization']

    if (!authHeader) {
      return reply.status(401).send({ message: "Authorization header is missing" })
    }

    const token = authHeader.split(' ')[1]

    const decoded = await verifyToken(token)

    request.user = decoded
  } catch (e) {
    return reply.status(401).send({ message: "Invalid or expired token" })
  }
}
