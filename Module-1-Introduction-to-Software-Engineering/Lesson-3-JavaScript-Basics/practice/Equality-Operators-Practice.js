// Create two variables, one equal to '10' and the other equal to 10
const a = "10"
const b = 10

// Comparing the two variables, are they strictly equal?
console.log(a === b)

// Comparing the two variables, are they loosely equal?
console.log(a == b)

// Check if the variable set to 10 is not loosely equal to 'ten' 
console.log(b != 'ten')

// Create a variable and initialize it to true, check if it is not strictly equal to 'true' 
const c = (a == b)
console.log(c)
console.log(c !== 'true')
