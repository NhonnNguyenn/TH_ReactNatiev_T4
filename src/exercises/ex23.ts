
export async function run() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const completed = todos.filter((t:any) => t.completed === true);
    console.log("Exercise 23 completed todos (first 5):", completed.slice(0,5));
  } catch (err) {
    console.error("Exercise 23 error:", err);
  }
}

if (require.main === module) run().catch(console.error);
