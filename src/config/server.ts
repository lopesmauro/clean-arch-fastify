import fastify from "fastify"
import userRoutes from "../infrastructure/routes/userRoutes"

const server = fastify({
    logger: true
})

server.register(userRoutes)

export default server