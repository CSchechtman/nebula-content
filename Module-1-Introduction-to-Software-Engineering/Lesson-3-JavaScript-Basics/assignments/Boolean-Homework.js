//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 === 'two')

//2. Write a statement that checks if '2' and 2 are loosely equal
console.log('2' == 2)

//3. Write a statement that checks if 14 and '14' are strictly equal
console.log(14 === '14')

//4. Write a statement that checks if 10 is greater than -100

console.log(10 > -100)
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4

console.log(4 === Math.round(4.4))
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up

console.log(10 >= Math.ceil(9.1))

//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4


console.log(10 > 2 && 3 > 4)
// // 7.a Without changing any of the numbers, or their order. How do we make this print true?
// Change > to < on the right side of the conditional.
console.log(10 > 2 && 3 < 4)

//8. Pick a number between 1-20 and assign it to a variable
let numOfWatermelons = 10

// // This is the number of watermelons you purchased.
// // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// // If your number of watermelons is more than 15, print, 'Did you have a coupon?'

if(numOfWatermelons === (1 || 2)){
    console.log('Looks like you like watermelon')
  } else if(numOfWatermelons > 2 && numOfWatermelons <= 5){
    console.log('Thats a lot of watermelon')
  } else if(numOfWatermelons > 5 && numOfWatermelons <= 10){
    console.log('Thats too many watermelon!')
  } else if(numOfWatermelons > 10 && numOfWatermelons <= 15){
    console.log('You must be CRAZY for watermelon!')
  } else if(numOfWatermelons > 15){
    console.log('Did you have a coupon?')
  }
//   if(numOfWM === 1 || numOfWM ===  2) {
//     console.log('Looks like you like watermelon')
//   } else if (numOfWM > 2 && numOfWM <= 5) {
//     console.log('Thats a lot of watermelon')
//   } else if (numOfWM > 5 && numOfWM <= 10){
//     console.log('Thats too many watermelon!')
//   } else if (numOfWM > 10 && numOfWM <= 15) {
//     console.log('You must be CRAZY for watermelon!')
//   } else {
//     console.log('Did you have a coupon?')
//   }

// //9. Create a variable that represents your current hunger on a level of 1-10

let h = 3

//   // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
//   // Otherwise print. "I'm not hungry"

let text = h > 6 ? "Time to eat!" : "I'm not hungry"

console.log(text)

// 10. Think of an Magic-8 Ball
// Write a switch statement that works the same way.
// When you run this file you should
// Generate a random number
// And get an out put from your switch statement?
// Ex:
// I update a question variable to say "Will I win the lottery?"
// I run node <FILENAME>
// The console prints out:
// Will I win the lottery? Not Likely.

const randomNum = Math.ceil(Math.random() * 5)

switch(randomNum){
  case 1:
      console.log(1)
      break;
    case 2:
      console.log(2)
      break;
}


// BONUS:
// On the prior example, try and have the answer print like someone is speaking to you.

// Ex:
//Input:  Will I win the lottery?
//Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

// Ex2:
// Input: Will I get a new pet this year?
// Output: Will you get a pet this year? It is certain.

// Try and handle many edge cases - can we put in any question and have it spit out a grammatically correct response?
