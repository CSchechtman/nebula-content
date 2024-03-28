// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(i = 0; i <=30; i++){
    let index = i
    console.log("the current index is " + i)
}



// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for (i = 1; i <= 10; i += 2){
    let index = i
    console.log("the current index is " + i)
}



// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const celebrity = ['Tom Hanks', 'Keanu Reeves', 'Jim Carrey', 'Matt Damon', 'Michael Keaton']
for (i = 0; i < celebrity.length; i++){
    console.log(celebrity[i])
}


// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console
for (i = 0; i < celebrity.length; i++){
    let text = celebrity[i]
    if (text.length % 2 === 0) {
        console.log(celebrity[i])
    }
}


// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
const fName = []
for (i = 0; i < celebrity.length; i++){
    let text = celebrity[i]
    const splitName = text.split(" ");
    fName.push(splitName[0])
}
console.log(fName)

// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
const lName = []
for (i = 0; i < celebrity.length; i++){
    let text = celebrity[i]
    const splitName = text.split(" ");
    lName.push(splitName[1])
}
console.log(lName)


// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console
for (i = 0; i < celebrity.length; i++){
    let text = celebrity[i]
    let letter = text.split("")
    for (j = 0; j < letter.length; j++){
        let vowelQ = letter[j];
        if (vowelQ === "a" || vowelQ === "e" || vowelQ === "i" || vowelQ === "o" || vowelQ === "u" || vowelQ === "A" || vowelQ === "E" || vowelQ === "I" || vowelQ === "O" || vowelQ === "U"){
            console.log(vowelQ)
        }
    }
}


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for (i = 0; i < celebrity.length; i++){
    let text = celebrity[i]
    let letter = text.split("")
    for (j = 0; j < letter.length; j++){
        if (letter[j] !== letter[j].toUpperCase()) {
            continue;
        }else if (letter[j] === " ") {
            continue;
        }else{
            console.log(letter[j]);
        }
    }
}


// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]



// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
