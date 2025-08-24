class Q21_Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return [...this.items]; }
}

// Demo
(() => {
  const repo = new Q21_Repository<number>();
  repo.add(1); repo.add(2);
  console.log(repo.getAll());
})();
