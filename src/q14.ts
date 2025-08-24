class Q14_Employee {
  constructor(public name: string) {}
  work(): void { console.log(`${this.name} is working`); }
}

class Q14_Manager extends Q14_Employee {
  approveBudget(): void { console.log(`${this.name} approved the budget`); }
}

class Q14_Developer extends Q14_Employee {
  writeCode(): void { console.log(`${this.name} is writing code`); }
}

// Demo
(() => {
  new Q14_Manager("Mi").approveBudget();
  new Q14_Developer("Minh").writeCode();
})();
