export function simulateTask(time: number): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("Task done"), time));
}

export async function run() {
  const res = await simulateTask(500);
  console.log("Exercise 5 result:", res);
}

if (require.main === module) run().catch(console.error);
