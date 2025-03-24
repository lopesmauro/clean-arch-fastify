import {FastifyInstance} from "fastify"
import {getUserByIdController, postUserController, updateUserController, deleteUserController} from "../../interfaces/controllers/userController"

const userRoutes = async (fastify: FastifyInstance) => {
    fastify.get("/users", getUserByIdController)
    fastify.post("/users", postUserController)
    fastify.put("/users/:id", updateUserController)
    fastify.delete("/users/:id", deleteUserController)
} 

export default userRoutes