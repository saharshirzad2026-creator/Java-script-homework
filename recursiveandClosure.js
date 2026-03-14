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