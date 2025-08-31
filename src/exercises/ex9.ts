
export function filterEven(arr: number[]): Promise<number[]> {
  return new Promise(resolve => setTimeout(() => resolve(arr.filter(n => n % 2 === 0)), 1000));
}

export async function run() {
  const res = await filterEven([1,2,3,4,5,6]);
  console.log("Exercise 9 result:", res);
}

if (require.main === module) run().catch(console.error);
