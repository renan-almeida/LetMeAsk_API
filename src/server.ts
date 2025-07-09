import {fastify} from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors';
import {  env } from './env.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Definiição de quais aplicações Front-End minha API irá aceitar requisições
app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// Verificação se a api esta rodando
app.get('/health', () => {
    return "OK"
})

// Importando rotas
app.listen({ port: env.PORT }).then(() => {
    console.log('HTTP server running!')
    console.log(env.PORT)
})
