class Q27_Person {
  constructor(public name: string, public age: number) {}
}

class Q27_Teacher extends Q27_Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  introduce(): void {
    console.log(`I'm ${this.name}, ${this.age} years old, teaching ${this.subject}.`);
  }
}

// Demo
(() => {
  new Q27_Teacher("Anna", 30, "Math").introduce();
})();
