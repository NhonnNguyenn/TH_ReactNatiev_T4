class Q2_Person {
  constructor(public name: string, public age: number) {}
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Q2_Student extends Q2_Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  displayAll(): void {
    this.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}

// Demo
(() => {
  const s = new Q2_Student("Nhon", 19, "A");
  s.displayAll();
})();
