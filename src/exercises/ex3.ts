export function rejectAfterOne(): Promise<void> {
  return new Promise((_resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 1000));
}

export async function run() {
  try {
    await rejectAfterOne();
  } catch (err) {
    console.log("Exercise 3 caught error:", err.message || err);
  }
}

if (require.main === module) run().catch(console.error);
