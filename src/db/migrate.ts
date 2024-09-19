import { config } from "dotenv";
import path from "path";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dbClient, db } from "./";

config({ path: ".env" }); // or .env.local

async function main() {
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), "/migrations"),
  });
  console.log(`Migrations complete`);
  await dbClient.end();
}

main();
