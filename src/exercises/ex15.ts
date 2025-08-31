
import { timesThree } from "./ex14";

export async function run() {
  const a = await timesThree(1);
  const b = await timesThree(2);
  const c = await timesThree(3);
  console.log("Exercise 15 sequential results:", a, b, c);
}

if (require.main === module) run().catch(console.error);
