class Human{
    setName(name){
        if(isNaN(name) && name.length > 3){
            this.name = name;
        }
    }
    getName(){
        return this.name;
    }
    setAge(age){
        if(!isNaN(age) && age>=1){
            this.age = age;
        }
        else{
            console.log("The age should be a number and greater than 0");
        }
    }
    getAge(){
        return this.age;
    }
    setEmail(email){
        if(email.includes("@") && isNaN(email)){
            this.email = email;
        }
        else{
            console.log("you should add an @ to your email and also the email should not be a number");
        }
    }
    getEmail(){
        return this.email;
    }
}

const firstPerson = new Human();
firstPerson.setName("Ahmad");
console.log(firstPerson.getName());

firstPerson.setEmail("Ahmad");
console.log(firstPerson.getEmail());

firstPerson.setAge(16);
console.log(firstPerson.getAge());