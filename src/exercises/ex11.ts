
export function helloAsyncPromise(): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("Hello Async"), 2000));
}

export async function run() {
  const res = await helloAsyncPromise();
  console.log("Exercise 11 result:", res);
}

if (require.main === module) run().catch(console.error);
