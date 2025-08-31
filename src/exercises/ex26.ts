
export function wait(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function run() {
  console.log("Exercise 26: waiting 5 seconds...");
  await wait(5000);
  console.log("Exercise 26: done waiting");
}

if (require.main === module) run().catch(console.error);
