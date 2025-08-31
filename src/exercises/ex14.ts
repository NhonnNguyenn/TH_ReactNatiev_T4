
export async function timesThree(n: number): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(n * 3), 1000));
}

export async function run() {
  const r = await timesThree(7);
  console.log("Exercise 14 result:", r);
}

if (require.main === module) run().catch(console.error);
