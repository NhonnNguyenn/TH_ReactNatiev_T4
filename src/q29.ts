interface Q29_Movable {
  move(): void;
}

class Q29_Car implements Q29_Movable {
  move(): void { console.log("Car moves on road"); }
}

class Q29_Robot implements Q29_Movable {
  move(): void { console.log("Robot moves on track"); }
}

// Demo
(() => {
  const arr: Q29_Movable[] = [new Q29_Car(), new Q29_Robot()];
  arr.forEach(m => m.move());
})();
