
import { rejectAfterOne } from "./ex3";

export async function run() {
  try {
    await rejectAfterOne();
  } catch (err) {
    console.log("Exercise 13 caught (async):", err.message || err);
  }
}

if (require.main === module) run().catch(console.error);
