
export async function run() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log("Exercise 21 fetched:", data);
  } catch (err) {
    console.error("Exercise 21 error:", err);
  }
}

if (require.main === module) run().catch(console.error);
