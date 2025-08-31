
export async function run() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/INVALID", // will fail
    "https://jsonplaceholder.typicode.com/todos/3"
  ];
  const promises = urls.map(u => fetch(u).then(r => {
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
  }));
  const settled = await Promise.allSettled(promises);
  settled.forEach((s, idx) => {
    if (s.status === "fulfilled") console.log(`Exercise 30 [${idx}] fulfilled:`, (s as PromiseFulfilledResult<any>).value);
    else console.log(`Exercise 30 [${idx}] rejected:`, (s as PromiseRejectedResult).reason);
  });
}

if (require.main === module) run().catch(console.error);
