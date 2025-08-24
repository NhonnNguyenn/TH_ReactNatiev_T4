class Q26_Product {
  constructor(public name: string, public price: number) {}
}

class Q26_Order {
  private products: Q26_Product[] = [];
  addProduct(p: Q26_Product): void { this.products.push(p); }
  total(): number { return this.products.reduce((sum, p) => sum + p.price, 0); }
}

// Demo
(() => {
  const order = new Q26_Order();
  order.addProduct(new Q26_Product("A", 50));
  order.addProduct(new Q26_Product("B", 70));
  console.log("Total:", order.total());
})();
