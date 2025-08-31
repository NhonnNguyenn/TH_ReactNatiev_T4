
export async function run() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2",
      "https://jsonplaceholder.typicode.com/todos/3"
    ];
    const results = await Promise.all(urls.map(u => fetch(u).then(r=>r.json())));
    console.log("Exercise 22 results:", results);
  } catch (err) {
    console.error("Exercise 22 error:", err);
  }
}

if (require.main === module) run().catch(console.error);
