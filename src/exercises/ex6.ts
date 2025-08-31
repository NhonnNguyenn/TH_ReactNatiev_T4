import { simulateTask } from "./ex5";

export async function run() {
  const p1 = simulateTask(500);
  const p2 = simulateTask(800);
  const p3 = simulateTask(300);
  const res = await Promise.all([p1, p2, p3]);
  console.log("Exercise 6 results:", res);
}

if (require.main === module) run().catch(console.error);
