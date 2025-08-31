
import { timesThree } from "./ex14";

export async function run() {
  const tasks = [timesThree(2), timesThree(4), timesThree(6)];
  const res = await Promise.all(tasks);
  console.log("Exercise 16 parallel results:", res);
}

if (require.main === module) run().catch(console.error);
