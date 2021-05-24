const myName = 'Carlos';
const myAge = 12;

console.log(myName, myAge);
const suma = (a: number, b: number) => {
  console.log('Res:', a, b);
  return a + b;
};

suma(1, 4);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name} with age: ${this.age}`;
  }
}

const carlos = new Person(21, 'Carlos');
carlos.getSummary();
