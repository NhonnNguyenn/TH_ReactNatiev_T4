import { simulateTask } from "./ex5";

export async function run() {
  const p1 = simulateTask(1000);
  const p2 = simulateTask(400);
  const p3 = simulateTask(700);
  const winner = await Promise.race([p1, p2, p3]);
  console.log("Exercise 7 winner:", winner);
}

if (require.main === module) run().catch(console.error);
