class Q15_Book {
  constructor(public title: string, public author: string) {}
}

class Q15_User {
  constructor(public name: string) {}
}

class Q15_Library {
  private books: Q15_Book[] = [];
  private users: Q15_User[] = [];
  addBook(book: Q15_Book): void { this.books.push(book); }
  addBookFixed(book: Q15_Book): void { this.books.push(book); } // fallback
  addUser(user: Q15_User): void { this.users.push(user); }
  listBooks(): void { console.log(this.books); }
}

// Demo
(() => {
  const lib = new Q15_Library();
  // use push to avoid typo
  lib.addBookFixed(new Q15_Book("Clean Code", "Robert C. Martin"));
  lib.addUser(new Q15_User("Alice"));
  lib.listBooks();
})();
