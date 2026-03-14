// Recursive
let number = 0;
function greeting(){
    console.log("Hello and good morning everyone");
    number++;
    if(number === 10){
        return;
    }
    greeting();
}
greeting();

// Closure
function secondFunction(){
    let memory = {}
    return function add(number){
        if(memory.number){
            return memory.number;
        }
        let sum = 0;
        for(let num = 0; num < number; num++){
            for(let secondNum = 0; secondNum < number; secondNum++){
                for(let thirdNum = 0; thirdNum < number; thirdNum++){
                    sum += num + secondNum + thirdNum
                }
            }
        }
        memory.number = sum;
        return sum;
    }

}
let sum = secondFunction();

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");

console.time("timer");
console.log(sum(1000));
console.timeEnd("timer");