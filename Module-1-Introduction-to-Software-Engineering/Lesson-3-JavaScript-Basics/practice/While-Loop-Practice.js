// Reminder: control-c will kill an infinitely running node-process


// 1. Write a while loop that loops over a string and logs the letter when it find an "a"
const whileString = "Craig";
let i = 0;

while(true){
    if(whileString[i] === "a")
    console.log("there's an a here")
    break;
}


// 2. Write a while loop that logs to the console the 'count' until the 'count' reaches 100
// // Inside the while loop be sure to increase count by some number

let count = 0

while(count <= 100){
    console.log(count)
    count++
}