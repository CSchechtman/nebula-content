// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
let lowercaseNoCaps = noCaps.toLowerCase()
console.log(lowercaseNoCaps)


// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
let upperLoud = loud.toUpperCase()
console.log(upperLoud)


// Join the prior two variables together.
console.log(lowercaseNoCaps + upperLoud)
 

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
let splitStringOfNames = stringOfNames.split(" ")
console.log(splitStringOfNames)



// Make your own mad-libs using a template literal
let location1 = "park"
let noun1 = "dog"
let noun2 = "nephew"

const madlibTemplateLiteral = `When I go to the ${location1} I like to bring my ${noun1} and my ${noun2}!`

console.log(madlibTemplateLiteral)



// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
console.log(ironMan.slice(0,1) + ironMan.slice(5,6))
// console.log(ironMan[0] + ironMan[5]) another option



// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
let newString = string.slice(19,27)
console.log(newString)


// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
console.log(string1.slice(11))
// const lastIndex = string1.length - 1


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';
const addVar = +ten + +five
console.log(addVar)


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
const sentenceToArr = sentence.split(" ")
console.log(sentenceToArr)

