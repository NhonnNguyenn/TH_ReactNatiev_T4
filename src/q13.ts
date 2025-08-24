abstract class Q13_Shape {
  abstract area(): number;
}

class Q13_Square extends Q13_Shape {
  constructor(public side: number) { super(); }
  area(): number { return this.side * this.side; }
}

class Q13_Circle extends Q13_Shape {
  constructor(public radius: number) { super(); }
  area(): number { return Math.PI * this.radius * this.radius; }
}

// Demo
(() => {
  console.log(new Q13_Square(4).area());
  console.log(new Q13_Circle(2).area());
})();
