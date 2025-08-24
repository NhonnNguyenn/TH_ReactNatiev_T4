class Q7_User {
  #name: string;
  constructor(name: string) { this.#name = name; }
  get name(): string { return this.#name; }
  set name(v: string) {
    if (!v.trim()) throw new Error("Name cannot be empty");
    this.#name = v;
  }
}

// Demo
(() => {
  const u = new Q7_User("Alice");
  console.log(u.name);
  u.name = "Eve";
  console.log(u.name);
})();
