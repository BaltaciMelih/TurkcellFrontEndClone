function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    // this.showInfo = function() {
    //     console.log("Bilgiler gösteriliyor...");
    // };
    // this.toString = function() {
    //     console.log(`
    //     İsim: ${this.name}
    //     Yaş: ${this.age}
    //     Maaş: ${this.salary}
    //     `);
    // };
}

Employee.prototype.showInfo = function() {
    console.log(`
        İsim: ${this.name}
        Yaş: ${this.age}
        Maaş: ${this.salary}
    `);
};

const person1 = new Employee("Varol", 36, 5000);
const person2 = new Employee("Bilgehan", 20, 10000);
console.log(person1);
// person1.toString();