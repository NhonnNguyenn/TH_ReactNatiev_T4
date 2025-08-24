class Q6_Book {
  constructor(public title: string, public author: string, public year: number) {}
}

// Demo
(() => {
  const b = new Q6_Book("Clean Code", "Robert C. Martin", 2008);
  console.log(b);
})();
