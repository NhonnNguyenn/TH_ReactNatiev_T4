
import { fetchUser } from "./ex18";

export async function fetchUsers(ids: number[]) {
  return Promise.all(ids.map(id => fetchUser(id)));
}

export async function run() {
  const users = await fetchUsers([1,2,3]);
  console.log("Exercise 19 users:", users);
}

if (require.main === module) run().catch(console.error);
