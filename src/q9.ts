interface Q9_Animal {
  name: string;
  sound(): void;
}

class Q9_Dog implements Q9_Animal {
  constructor(public name: string) {}
  sound(): void { console.log("Woof!"); }
}

// Demo
(() => {
  const d = new Q9_Dog("Rex");
  d.sound();
})();
