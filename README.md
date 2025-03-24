src/
├── application/
│   └── use-cases/
│       └── user/
│           └── createUser.ts          # Caso de uso para criar um usuário
│           └── getUser.ts             # Caso de uso para buscar um usuário
│           └── updateUser.ts          # Caso de uso para atualizar um usuário
├── domain/
│   └── entities/
│       └── user.ts                   # Entidade 'User' com regras de negócio
│   └── interfaces/
│       └── userRepository.ts         # Interface que o repositório deve implementar
├── infrastructure/
│   └── database/
│       └── prisma.ts                 # Configuração do Prisma
│   └── repositories/
│       └── userRepository.ts         # Implementação do repositório usando Prisma
│   └── routes/
│       └── userRoutes.ts             # Definição das rotas do usuário
├── interfaces/
│   └── controllers/
│       └── userController.ts         # Controlador que manipula as requisições
├── config/
│   └── server.ts                     # Configuração do Fastify (servidor)
└── index.ts       