class Q10_Account {
  public owner: string;
  private _balance: number;
  readonly accountNo: string;

  constructor(owner: string, balance: number, accountNo: string) {
    this.owner = owner;
    this._balance = balance;
    this.accountNo = accountNo;
  }

  get balance(): number { return this._balance; }
}

// Demo
(() => {
  const a = new Q10_Account("Alice", 1000, "ACC123");
  console.log(a.owner, a.balance, a.accountNo);
})();
