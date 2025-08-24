class Q11_Animal {
  constructor(public name: string) {}
}

class Q11_Dog extends Q11_Animal {
  bark(): void { console.log(`${this.name} barks: Woof!`); }
}

class Q11_Cat extends Q11_Animal {
  meow(): void { console.log(`${this.name} meows: Meow!`); }
}

// Demo
(() => {
  new Q11_Dog("Rex").bark();
  new Q11_Cat("Mimi").meow();
})();
