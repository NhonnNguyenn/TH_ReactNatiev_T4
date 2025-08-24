class Q22_Stack<T> {
  private data: T[] = [];
  push(item: T): void { this.data.push(item); }
  pop(): T | undefined { return this.data.pop(); }
  peek(): T | undefined { return this.data[this.data.length - 1]; }
  isEmpty(): boolean { return this.data.length === 0; }
}

// Demo
(() => {
  const s = new Q22_Stack<number>();
  s.push(1); s.push(2);
  console.log(s.peek());
  console.log(s.pop());
  console.log(s.isEmpty());
})();
