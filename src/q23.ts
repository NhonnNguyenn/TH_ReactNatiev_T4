interface Q23_Payment {
  pay(amount: number): void;
}

class Q23_CashPayment implements Q23_Payment {
  pay(amount: number): void { console.log(`Paid ${amount} by cash`); }
}

class Q23_CardPayment implements Q23_Payment {
  pay(amount: number): void { console.log(`Paid ${amount} by card`); }
}

// Demo
(() => {
  const methods: Q23_Payment[] = [new Q23_CashPayment(), new Q23_CardPayment()];
  methods.forEach(m => m.pay(100));
})();
