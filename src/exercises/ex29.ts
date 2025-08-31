
import { simulateTask } from "./ex5";

export async function queueProcess(tasks:number[]) {
  const results = [];
  for (const t of tasks) {
    const r = await simulateTask(t);
    results.push(r);
  }
  return results;
}

export async function run() {
  const res = await queueProcess([200, 300, 100, 400]);
  console.log("Exercise 29 queue results:", res);
}

if (require.main === module) run().catch(console.error);
