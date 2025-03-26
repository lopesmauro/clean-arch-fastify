import { server } from '../../config/server'

export const generateToken = (payload: object) => server.jwt.sign(payload, { expiresIn: '2h' })

export const verifyToken = async (token: string) => server.jwt.verify(token)
