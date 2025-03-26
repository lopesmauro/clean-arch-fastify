import {FastifyInstance} from "fastify"
import {getUserByIdController, postUserController, updateUserController, deleteUserController} from "../../interfaces/controllers/userController"
import { authMiddleware } from "../middlewares/authMiddleware"

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.get("/users",{ preHandler: authMiddleware }, getUserByIdController)
    fastify.post("/users",  postUserController)
    fastify.put("/users/:id", { preHandler: authMiddleware } , updateUserController)
    fastify.delete("/users/:id", { preHandler: authMiddleware }, deleteUserController)
} 

export default userRoutes