export async function fetchWithRetry(url:string, retries:number=3, delayMs=500): Promise<any> {
  let lastErr:any;
  for (let i=0;i<retries;i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      lastErr = err;
      console.log(`Attempt ${i+1} failed. Retrying in ${delayMs}ms...`);
      await new Promise(r=>setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

export async function run() {
  try {
    const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
    console.log("Exercise 27 result:", data);
  } catch (err) {
    console.error("Exercise 27 final error:", err);
  }
}

if (require.main === module) run().catch(console.error);
