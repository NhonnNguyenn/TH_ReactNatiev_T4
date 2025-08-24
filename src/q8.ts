class Q8_Product {
  constructor(public name: string, public price: number) {}
}

// Demo
(() => {
  const products: Q8_Product[] = [
    new Q8_Product("A", 50),
    new Q8_Product("B", 120),
    new Q8_Product("C", 200)
  ];
  const filtered = products.filter(p => p.price > 100);
  console.log(filtered);
})();
