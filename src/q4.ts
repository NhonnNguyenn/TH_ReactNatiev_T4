class Q4_Rectangle {
  constructor(public width: number, public height: number) {}
  area(): number { return this.width * this.height; }
  perimeter(): number { return 2 * (this.width + this.height); }
}

// Demo
(() => {
  const r = new Q4_Rectangle(5, 3);
  console.log("Area:", r.area());
  console.log("Perimeter:", r.perimeter());
})();
