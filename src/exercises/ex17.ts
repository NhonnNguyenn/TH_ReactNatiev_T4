
import { timesThree } from "./ex14";

export async function run() {
  const promises = [timesThree(1), timesThree(2), timesThree(3)];
  for await (const val of promises) {
    console.log("Exercise 17 yielded:", val);
  }
}

if (require.main === module) run().catch(console.error);
