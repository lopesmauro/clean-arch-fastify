import { FastifyRequest, FastifyReply } from "fastify"
import { createUser } from "../../application/use-cases/user/createUser"
import { updateUser } from "../../application/use-cases/user/updateUser"
import { deleteUser } from "../../application/use-cases/user/deleteUser"  
import { getUserById } from "../../application/use-cases/user/getUserById"
import { userDto } from "../dtos/user/userDto"
import { getUserIdDto } from "../dtos/user/getUserIdDto"

const getUserByIdController = (request:FastifyRequest, reply:FastifyReply) => {
    const {id} = request.params as getUserIdDto
    const user = getUserById(id)
    return reply.status(200).send(user)
}

const postUserController = (request:FastifyRequest, reply:FastifyReply) => {
    const {name, email, password} = request.body as userDto
    createUser({name, email, password})
    return reply.status(201).send({message: "User created successfully"})
}

const updateUserController = (request:FastifyRequest, reply:FastifyReply) => {
    const {id} = request.params as getUserIdDto
    const {name, email} = request.body as userDto
    updateUser(id, {name, email})
    return reply.status(200).send({message: "User updated successfully"})

}

const deleteUserController = (request:FastifyRequest, reply:FastifyReply) => {
    const {id} = request.params as getUserIdDto
    deleteUser(id)
    return reply.status(200).send({message: "User deleted successfully"})
}

export {getUserByIdController, postUserController, updateUserController, deleteUserController}