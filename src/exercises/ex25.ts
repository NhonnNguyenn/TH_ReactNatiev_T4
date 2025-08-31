
export function downloadFile() {
  return new Promise<void>(resolve => {
    console.log("Exercise 25: starting download...");
    setTimeout(() => {
      console.log("Exercise 25: download complete");
      resolve();
    }, 3000);
  });
}

export async function run() {
  await downloadFile();
}

if (require.main === module) run().catch(console.error);
