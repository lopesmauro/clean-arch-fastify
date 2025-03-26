import { FastifyInstance } from "fastify"
import {login} from "../../interfaces/controllers/authController"

const authRoutes = async (fastify: FastifyInstance) => {
    fastify.post('/auth', login )
}

export {authRoutes}