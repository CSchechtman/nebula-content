// Utilize the switch statement to re-write your horse-racing exercise from earlier
// Feel free to copy the old if statement in and convert it into a switch statement
// Create a Horse Racing program that when executed, stores a random number in a variable called position between 1 and 5. 
// The program should then check to see what number is stored in the variable and output the messages indicated in the comments below.


// If position is 1, log to the console: "(Insert horseName) finished in first place!"
// If position is 2, log to the console: "(Insert horseName) finished in second place!"
// If position is 3, log to the console: "(Insert horseName) finished in third place!"
// If position is greater than 4, log to the console: "(Insert horseName) did not finish in the top 3."

let horseName = "Santa's Little Helper";
let position = Math.ceil(Math.random() * 5);

switch(position){
    case 1:
        console.log(`${horseName} finished in first place!`);
        break;
    case 2:
        console.log(`${horseName} finished in second place!`);
        break;
    case 3:
        console.log(`${horseName} finished in third place!`);
        break;
    default:
        console.log(`${horseName} did not finish in the top 3.`);
}

// const grade = "A";

// switch(grade) {
//     case 'A':
//       console.log("You're the best");
//       break;
//     case 'B':
//       console.log("Not bad")
//       break;
//     default:
//       console.log("You need to study more")
//       break;
//   }


  const chores = "done";

  if(chores === "done"){
    console.log("You get TV time.");
  } else {
    console.log("No TV time for you")
  }



  let grade = 90
  if (grade >= 80 && grade <= 100) {
    console.log("Excellent");
  } else if (grade >= 60 && grade <= 79) {
    console.log("OK");
  } else {
    console.log("Failed");
  }


let a = 7
let b = 10

let text = a > b ? "A is greater than b" : "A is less than or equal to b"

console.log(text)