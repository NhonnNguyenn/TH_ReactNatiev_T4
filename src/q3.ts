class Q3_Car {
  constructor(public brand: string, public model: string, public year: number) {}
  showInfo(): void {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  }
}

// Demo
(() => {
  const c = new Q3_Car("Toyota", "GR Supra", 2019);
  c.showInfo();
})();
