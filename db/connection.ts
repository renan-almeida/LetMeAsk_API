import postgres from 'postgres';
import { env } from '../src/env.ts';

export const sql = postgres(env.DATABASE_URL)

export const result = await sql`SELECT 'Hello' as message`;

console.log(result)