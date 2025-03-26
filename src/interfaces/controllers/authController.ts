import { FastifyRequest, FastifyReply } from "fastify"
import { UserDTO } from "../dtos/user/user.dto"
import { getUserByEmail} from "../../application/use-cases/auth/getUserByEmail"
import { generateToken } from "../../infrastructure/security/jwt"

const login = async (request: FastifyRequest, reply: FastifyReply) => {
    try{
        const {email, password} = request.body as UserDTO
        const user = getUserByEmail(email, password)
        if (!user) return reply.status(404).send({message: "User not found"})
        const token = generateToken(user)
        return reply.status(200).send({token})
    } catch (e) {
        return reply.status(400).send({message: "Error logging in"})
    }
}

export { login }
