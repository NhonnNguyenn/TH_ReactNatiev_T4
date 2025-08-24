class Q19_Animal {
  speak(): void { console.log("Some generic sound"); }
}
class Q19_Dog extends Q19_Animal {
  speak(): void { console.log("Woof"); }
}
class Q19_Cat extends Q19_Animal {
  speak(): void { console.log("Meow"); }
}

// Polymorphism
(() => {
  const animals: Q19_Animal[] = [new Q19_Dog(), new Q19_Cat()];
  animals.forEach(a => a.speak());
})();
