
import { simulateTask } from "./ex5";

export async function run() {
  const res = await simulateTask(2000);
  console.log("Exercise 12 result:", res);
}

if (require.main === module) run().catch(console.error);
