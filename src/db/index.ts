import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
config({ path: ".env" }); // or .env.local
// for query purposes
export const dbClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(dbClient, {
  schema,
  logger: true,
});