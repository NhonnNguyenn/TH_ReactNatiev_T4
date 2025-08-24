class Q16_Box<T> {
  private value: T;
  constructor(value: T) { this.value = value; }
  get(): T { return this.value; }
  set(v: T): void { this.value = v; }
}

// Demo
(() => {
  const n = new Q16_Box<number>(123);
  console.log(n.get());
  const s = new Q16_Box<string>("hello");
  console.log(s.get());
})();
