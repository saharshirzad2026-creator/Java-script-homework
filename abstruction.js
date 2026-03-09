// ABSTRUCTION
class Human{
    name;
    email;
    age;
    gender;
    constructor(name,email,age,gender){
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
    }
    getAge(){
        console.log(`${(this.name).toUpperCase()} is ${this.age} years old`);
    }
    talk(){
        console.log(`${this.name} can talk`);
    }
}
const firstPerson = new Human("ali", "ali@gamil.com", 30);
firstPerson.getAge();

class Weather{
    degree;
    constructor(degree){
        this.degree = degree;
    }
    celciusToFaranhit(){
        const changer = this.degree * 9/5 + 32;
        return changer;
    }
}
const currentWeather = new Weather(87);
const result = currentWeather.celciusToFaranhit();
console.log(result);

// POLYMORPHISM
class Animal{
    name;
    age;
    gender;
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    sound(){
        return this.name + 'can make sound';
    }
}
class Lion extends Animal{
    courage;
    constructor(name,age,courage){
        super(Animal);
        this.name = name;
        this.age = age;
        this.courage = this.courage;
    }
    sound(){
        return `${this.name} can roor`;
    }
}
class SecondHuman extends Animal{
    lastName
    constructor(name,age,lastName){
        super(Animal);
        this.name = name;
        this.age = age;
        this.lastName = lastName;
    }
    sound(){
        return `${this.name} can talk`;
    }
}
const firstLion = new Lion("Lion",12,true);
console.log(firstLion.sound());
const secondPerson = new SecondHuman("Mahsa",20,'Rezaie');
console.log(secondPerson.sound());