class Q28_Animal {
  protected makeSound(): void {
    console.log("Some sound");
  }
  demo(): void { this.makeSound(); }
}

class Q28_Dog extends Q28_Animal {
  protected makeSound(): void { console.log("Woof"); }
}

class Q28_Cat extends Q28_Animal {
  protected makeSound(): void { console.log("Meow"); }
}

// Demo
(() => {
  new Q28_Dog().demo();
  new Q28_Cat().demo();
})();
