
export function fetchUser(id: number): Promise<{id:number, name:string}> {
  return new Promise(resolve => setTimeout(() => resolve({id, name: `User-${id}`}), 1000));
}

export async function run() {
  const user = await fetchUser(5);
  console.log("Exercise 18 fetched user:", user);
}

if (require.main === module) run().catch(console.error);
