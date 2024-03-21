// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'
const myNoCaps = noCaps.toLowerCase()
console.log(myNoCaps)

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";
const upperCase = loud.toUpperCase()
console.log(upperCase)

// Join the prior two variables together.
 console.log(myNoCaps + upperCase)
 console.log(`${myNoCaps}${upperCase}`)
 console.log( myNoCaps.concat(upperCase))

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';

let splitString = stringOfNames.split(' ')
console.log(splitString)

// Make your own mad-libs using a template literal

const fName = "John"
const hobby = "hike"
const greeting = `Hi my name is ${fName} and I like to ${hobby}.`
console.log(greeting)


// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
// const initals = ironMan.slice(0,1)
// const initals2 = ironMan.slice(5,6)
// console.log(initals + initals2)
console.log(ironMan[0] + ironMan[5])

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
const sliceString = string.slice(19,27)
console.log(sliceString)

// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
const lastIndex = string1.length - 1
// console.log(string1[lastIndex])


const index = string1.indexOf("?")
// console.log(string1[index])

// string1[11]

// const sliced = string1.slice(11)


// Given the following variables, add them together to get 15 
const ten = '10';
const five = '5';

const addVariable = +ten + +five
const addVariable1 = parseInt(ten) + parseInt(five)


// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 

const strArr = sentence.split('')
console.log(strArr)
