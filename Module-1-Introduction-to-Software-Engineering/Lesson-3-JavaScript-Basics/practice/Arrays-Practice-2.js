// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] = numArr[0] * 10
console.log(numArr)

// Add an additional element to the prior array
numArr.push(6)
console.log(numArr)


// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = numArr.pop()

console.log(removedItem, "test")

// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false
console.log(numArr.includes(1))


// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = numArr.shift()
console.log(numArr)

// Add that item back
numArr.unshift(removedFirstItem)
console.log(numArr)


// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort()
console.log(sortThis)


// Now reverse the prior array
const reverseSortThis = sortThis.reverse()

  
// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
let favoriteFoods = "My favorite foods are tuna, red beans and rice, and French Onion soup"
console.log(favoriteFoods)


// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
let arrayFavoriteFoods = favoriteFoods.split(' ')
console.log(arrayFavoriteFoods)


// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'
const joinFavoriteFoods = arrayFavoriteFoods.join('-')
console.log(joinFavoriteFoods)


// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location
const spliceArray = [1,2,3,4,5,7,8,9,10]
spliceArray.splice(5, 0, 6)
console.log(spliceArray)

// Create two arrays and, using JavaScript join them together
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr3)

// Create a multi-dimensional array
const multiArray = [1,2,[3,4,5]]

