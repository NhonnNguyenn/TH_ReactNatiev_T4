class Q18_MathUtil {
  static add(a: number, b: number): number { return a + b; }
  static subtract(a: number, b: number): number { return a - b; }
  static multiply(a: number, b: number): number { return a * b; }
  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }
}

// Demo
(() => {
  console.log(Q18_MathUtil.add(2,3));
  console.log(Q18_MathUtil.divide(10,2));
})();
