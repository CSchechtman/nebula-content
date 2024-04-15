// Higher order function - a function that takes in a function
const numbers = [1,3,5,7]

// instance methods on arrays mostly each method belongs to all arrays

// map - turns one array into another one
//ie
numbers.map(x => x * 2);

// filter - return a new array only with elements that match the condition of the internal function

numbers.filter(x => x < 4);

// forEach - executes a function once on each element in an array
numbers.forEach(console.log);

// reduce - accumulate a array into a single value
numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// sort - sorts your array based on the conditions of the passed function
numbers.sort((a, b) => b - a);  