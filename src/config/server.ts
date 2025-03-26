import fastify from "fastify"
import userRoutes from "../infrastructure/routes/userRoutes"
import { authRoutes } from "../infrastructure/routes/authRoutes"
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui"
import jwt from '@fastify/jwt'

const server = fastify({
    logger: true
})

server.get("/", async (request, reply) => {
    return { message: "Servidor está funcionando!" };
  });
  
server.register(jwt, {
    secret: process.env.JWT_SECRET || 'seu_segredo_super_secreto',
})

server.register(swagger, {
    openapi: {
      info: {
        title: "API",
        description: "Fastify API",
        version: "1.0.0",
      },
    },
  });
  
  server.register(swaggerUi, {
    routePrefix: "/docs", // Define o prefixo da rota para a documentação
    uiConfig: {
      docExpansion: "full",
      deepLinking: true,
    },
    staticCSP: true, // Permite que o Swagger UI funcione corretamente com conteúdo estático
    transformStaticCSP: (csp) => csp.replace("frame-ancestors 'none';", ""), // Ajuste para o Swagger UI funcionar no iframe
  });

server.register(userRoutes)
server.register(authRoutes)

export { server }