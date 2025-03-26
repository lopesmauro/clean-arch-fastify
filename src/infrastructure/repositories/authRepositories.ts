import prisma from "../database/prisma"
import { User } from "@prisma/client"

const getUserByEmail = async (email: string, password: string):Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || user.password !== password) return null

    return user ? { ...user } : null
}


export const authRepository = {
    getUserByEmail
}