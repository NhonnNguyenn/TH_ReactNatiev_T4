
import { simulateTask } from "./ex5";

export async function batchProcess() {
  const tasks = [simulateTask(200), simulateTask(400), simulateTask(600), simulateTask(800), simulateTask(1000)];
  return Promise.all(tasks);
}

export async function run() {
  const results = await batchProcess();
  console.log("Exercise 28 batch results:", results);
}

if (require.main === module) run().catch(console.error);
