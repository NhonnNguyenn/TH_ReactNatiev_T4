
export async function postData(payload: any) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function run() {
  try {
    const r = await postData({ title: "foo", body: "bar", userId: 1 });
    console.log("Exercise 24 post result:", r);
  } catch (err) {
    console.error("Exercise 24 error:", err);
  }
}

if (require.main === module) run().catch(console.error);
