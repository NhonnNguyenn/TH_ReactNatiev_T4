export function returnTen(): Promise<number> {
  return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
}

export async function run() {
  const n = await returnTen();
  console.log("Exercise 2 result:", n);
}

if (require.main === module) run().catch(console.error);
