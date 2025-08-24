interface Q12_Flyable { fly(): void; }
interface Q12_Swimmable { swim(): void; }

class Q12_Bird implements Q12_Flyable {
  fly(): void { console.log("Bird is flying"); }
}

class Q12_Fish implements Q12_Swimmable {
  swim(): void { console.log("Fish is swimming"); }
}

// Demo
(() => {
  new Q12_Bird().fly();
  new Q12_Fish().swim();
})();
