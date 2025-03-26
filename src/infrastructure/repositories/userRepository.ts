import prisma from "../database/prisma"
import { UserRepository } from "../../domain/interfaces/userRepository"
import { User } from "@prisma/client"

const createUser = async (user: { name: string; email: string, password: string }): Promise<void> => {
    await prisma.user.create({ data: {
        name: user.name,
        email: user.email,
        password: user.password
    }})    
}

const getUserById = async (id: string):Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { id } })
    return user ? { ...user, password: user.password } : null
}

const updateUser = async (id: string, userData: { name: string; email: string }): Promise<void>  => {   
    await prisma.user.update({ where: { id }, data: userData })    
}

const deleteUser = async (id: string): Promise<void>  => {
    await prisma.user.delete({ where: { id } })    
}

export const userRepository: UserRepository = {
    createUser,
    getUserById, 
    updateUser,
    deleteUser,
} 