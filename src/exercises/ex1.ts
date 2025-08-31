export async function run() {
  const p: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
  });
  const res = await p;
  console.log("Exercise 1 result:", res);
}

if (require.main === module) {
  run().catch(console.error);
}
