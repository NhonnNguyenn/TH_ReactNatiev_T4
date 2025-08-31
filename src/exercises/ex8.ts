export function square(n: number): Promise<number> {
  return Promise.resolve(n * n);
}
export function double(n: number): Promise<number> {
  return Promise.resolve(n * 2);
}
export function addFive(n: number): Promise<number> {
  return Promise.resolve(n + 5);
}

export function run() {
  square(2)
    .then(double)
    .then(addFive)
    .then(result => console.log("Exercise 8 result:", result))
    .catch(err => console.error(err));
}

if (require.main === module) run();
