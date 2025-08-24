class Q5_BankAccount {
  constructor(public balance: number = 0) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Số tiền gửi phải là số dương");
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Số tiền rút phải là số dương");
    if (amount > this.balance) throw new Error("Không đủ tiền");
    this.balance -= amount;
  }
}

// Demo
(() => {
  const acc = new Q5_BankAccount(100);
  acc.deposit(50);
  acc.withdraw(30);
  console.log("Balance:", acc.balance);
})();
