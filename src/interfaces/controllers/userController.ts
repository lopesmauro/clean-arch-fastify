import { FastifyRequest, FastifyReply } from "fastify"
import { createUser } from "../../application/use-cases/user/createUser"
import { updateUser } from "../../application/use-cases/user/updateUser"
import { deleteUser } from "../../application/use-cases/user/deleteUser"  
import { getUserById } from "../../application/use-cases/user/getUserById"
import { UserDTO, GetUserIdDTO } from "../dtos/user/user.dto"

const getUserByIdController = async (request:FastifyRequest, reply:FastifyReply) => {
    try{
        const {id} = request.params as GetUserIdDTO
        const user = getUserById(id)
        return reply.status(200).send(user)
    } catch (e) {
        return reply.status(404).send({message: "User not found"})
    }
}

const postUserController = async  (request:FastifyRequest, reply:FastifyReply) => {
    try{
        const {name, email, password} = request.body as UserDTO
        await createUser({name, email, password})
        return reply.status(201).send({message: "User created successfully"})
    } catch (e) {
        return reply.status(400).send({message: "Error creating user"})
    } 
}

const updateUserController = async (request:FastifyRequest, reply:FastifyReply) => {
    try{
        const {id} = request.params as GetUserIdDTO
        const {name, email} = request.body as UserDTO
        await updateUser(id, {name, email})
        return reply.status(200).send({message: "User updated successfully"})
    } catch (e) {
        return reply.status(400).send({message: "Error updating user"})
    }

}

const deleteUserController = async (request:FastifyRequest, reply:FastifyReply) => {
    try{
        const {id} = request.params as GetUserIdDTO
        await deleteUser(id)
        return reply.status(200).send({message: "User deleted successfully"})
    } catch (e) {
        return reply.status(400).send({message: "Error deleting user"})
    }
}

export {getUserByIdController, postUserController, updateUserController, deleteUserController}