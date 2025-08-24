class Q30_Student {
  constructor(public name: string, public grade: string) {}
  info(): string { return `${this.name} (${this.grade})`; }
}

class Q30_Teacher {
  constructor(public name: string, public subject: string) {}
  info(): string { return `${this.name} - ${this.subject}`; }
}

class Q30_School {
  private students: Q30_Student[] = [];
  private teachers: Q30_Teacher[] = [];
  addStudent(s: Q30_Student): void { this.students.push(s); }
  addTeacher(t: Q30_Teacher): void { this.teachers.push(t); }
  displayInfo(): void {
    console.log("Students:");
    this.students.forEach(s => console.log(" -", s.info()));
    console.log("Teachers:");
    this.teachers.forEach(t => console.log(" -", t.info()));
  }
}

// Demo
(() => {
  const school = new Q30_School();
  school.addStudent(new Q30_Student("Lan", "A"));
  school.addTeacher(new Q30_Teacher("Mr. Minh", "Physics"));
  school.displayInfo();
})();
