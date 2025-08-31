export function randomNumberPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    const r = Math.random();
    if (r < 0.95) resolve(r);
    else reject(new Error("Random failure (rare)"));
  });
}

export function run() {
  randomNumberPromise()
    .then(n => console.log("Exercise 4 .then result:", n))
    .catch(err => console.log("Exercise 4 .catch error:", err.message || err));
}

if (require.main === module) run();
