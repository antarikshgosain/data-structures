class User{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getNameAndAge(){
        return `${person1.firstname} is ${person1.age} years old!`
    }
    happyBirthday(){
        this.age += 1;
    }
}

var person1 = new User('Anta','Gosain', 26);

console.log(person1.getNameAndAge());
person1.happyBirthday();
console.log(person1.getNameAndAge());
person1.happyBirthday();
person1.happyBirthday();
console.log(person1.getNameAndAge());
