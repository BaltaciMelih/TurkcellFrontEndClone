// Object Literal

/* const person1 = {
    name: "Mert",
    age: "26",
    showInfo: function(){
        console.log("Bilgi gösteriliyor...")
    }
}
const person2 = {
    name: "Okan",
    age: "24",
    showInfo: function(){
        console.log("Bilgi gösteriliyor...")
    }
}

const date = new Date() */

//Yapıcı  Fonksiyon - Constructor

function Employee(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
/*     this.showInfo = function(){
        console.log("Bilgi gösteriliyor...")
    }; */
    this.toString = function() {
        console.log(`İsim: ${this.name}
        Yaş: ${this.age}
        Maaş: ${this.salary}`
        );
    };
}

Employee.prototype.showInfos = function(){
    console.log("Bilgi gösteriliyor...")
};

const person1 = new Employee("Mert", 36, 5000);
const person2 = new Employee("Okan", 24, 10000);
const person3 = new Employee("Yaren", 20, 15000);

console.log(person1);

person1.toString();

person1.showInfos();
