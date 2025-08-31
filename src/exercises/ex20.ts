
import { fetchUser } from "./ex18";

export function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("Timeout")), ms);
    p.then(res => { clearTimeout(t); resolve(res); })
     .catch(err => { clearTimeout(t); reject(err); });
  });
}

export async function run() {
  try {
    const result = await withTimeout(fetchUser(10), 2000);
    console.log("Exercise 20 result:", result);
  } catch (err) {
    console.log("Exercise 20 error:", err.message || err);
  }
}

if (require.main === module) run().catch(console.error);
