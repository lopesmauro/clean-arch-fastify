export const createUserEntity = (data: { name: string, email: string, password: string }) => ({
    name: data.name,
    email: data.email,
    password: data.password, 
})
  