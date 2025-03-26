import fastify from '../config/server'

export const verifyToken = async (token: string) => {
  try {
    const decoded = await fastify.jwt.verify(token)
    return decoded
  } catch (err) {
    throw new Error('Invalid or expired token')
  }
}
