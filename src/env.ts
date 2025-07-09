import {z} from 'zod';
// Garantindo que a aplicação apenas execute se estiver com todas as variáveis de ambiente.
const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env);

env.PORT