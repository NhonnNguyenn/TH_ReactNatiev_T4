class Q1_Person {
  constructor(public name: string, public age: number) {}
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Demo
(() => {
  const p = new Q1_Person("Nhon", 20);
  p.displayInfo();
})();
