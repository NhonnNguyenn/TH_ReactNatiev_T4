
export function sometimesFails(): Promise<string> {
  return new Promise((resolve, reject) => {
    const ok = Math.random() > 0.3;
    setTimeout(() => ok ? resolve("OK") : reject(new Error("Failed")), 500);
  });
}

export function run() {
  sometimesFails()
    .then(r => console.log("Exercise 10 then:", r))
    .catch(e => console.log("Exercise 10 catch:", e.message))
    .finally(() => console.log("Exercise 10 Done"));
}

if (require.main === module) run();
