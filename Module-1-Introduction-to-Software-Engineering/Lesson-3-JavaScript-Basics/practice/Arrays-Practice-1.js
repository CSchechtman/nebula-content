const myLuckyNumbers = [5, 3, 2, 11, 29];

// Using the above array

// Change the last element to equal the quotient of dividing it by 3.
// Change the 2nd element to equal the product of multiplying it by 3.
// log out the new array and check your work.

myLuckyNumbers[myLuckyNumbers.length - 1] = myLuckyNumbers[myLuckyNumbers.length - 1] / 3
myLuckyNumbers[1] = myLuckyNumbers[1] * 3
console.log(myLuckyNumbers)

// Declare an empty array
let emptyArray = []


// Declare an array with all the data types you can think of within it
let totalArray = [3, "three", [1,2,2]]


// Make a list of classmates names first names in an array
let fNameArray = ["Eric", "Michael", "Chris", "Garry", "Sharon", "Raffaello", "Rolando", "Hashem", "Craig"]
// Get the length of that previous array
console.log(fNameArray.length)

// Check the type of the previous array
console.log(typeof(fNameArray))


// Check if the previous array is an array
Array.isArray(fNameArray)


// Using indexing, grab your name from that previous array
console.log(fNameArray [8])


// Use the following variable to get the student at the index from the array of students
let index = 2; 
console.log(fNameArray[index])


// Update the array to have each element as a students first and last name : 'firstName lastName'
console.log(fNameArray)
let lNameArray = ["Dirr", "Richman", "Foster", "Garnett", "Bacchus", "Sosnowski", "Piche", "Cruz", "Schechtman"]
let fNameLName = [(fNameArray[0] + " " + lNameArray[0]), (fNameArray[1] + " " + lNameArray[1]), (fNameArray[2] + " " + lNameArray[2]), (fNameArray[3] + " " + lNameArray[3]), (fNameArray[4] + " " + lNameArray[4]), (fNameArray[5] + " " + lNameArray[5]), (fNameArray[6] + " " + lNameArray[6]), (fNameArray[7] + " " + lNameArray[7]), (fNameArray[8] + " " + lNameArray[8])]
console.log(fNameLName)
