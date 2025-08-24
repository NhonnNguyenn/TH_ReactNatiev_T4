interface Q20_Vehicle {
  move(): void;
}

class Q20_Car implements Q20_Vehicle {
  move(): void { console.log("Car is moving"); }
}

class Q20_Bike implements Q20_Vehicle {
  move(): void { console.log("Bike is moving"); }
}

// Demo
(() => {
  const list: Q20_Vehicle[] = [new Q20_Car(), new Q20_Bike()];
  list.forEach(v => v.move());
})();
