// inheritance

class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `${this.name} will sleep for ${hours} hours`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
  }
}

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClasses: number): string {
    return `Mr. ${this.name} will take ${numberOfClasses} classes.`;
  }
}

const student1 = new Student(`Jacob`, 36, `London`);

const teacher1 = new Teacher(`Pathan`, 46, `Wales`, `Lecturer`);
