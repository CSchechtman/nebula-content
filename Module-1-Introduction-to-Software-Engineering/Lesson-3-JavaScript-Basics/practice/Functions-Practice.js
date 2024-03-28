// Time To Practice!
// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.
const multiplyBy10 = (number) => {
    number = number * 10
    console.log(number)
}

multiplyBy10(3)

// function multiplyBy10(num){
//     return num * 10
// }

// console.log(multiplyBy10(4))

// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.

const sayGoodbye = (fname) => {
    return `Goodbye ${fname}, have a good day`;
}
console.log(sayGoodbye(`Craig`))

// const sayGoodbye = (name) => {
//     return `Goodbye ${name}`
// }
// console.log(sayGoodbye(`Craig`))

// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).

let newArray = []
function evenNumbers(array){
    for(let i = 0; i < array.length; i++){
        const arrayElement = array[i];
        if(arrayElement%2 === 0){
            newArray.push(arrayElement)
        }
    }
    console.log(newArray)
}

evenNumbers([7, 4, 3, 2, 8, 9, 15])

// const evenNumbers = function(array){
//     const evenArray = []
//     for(let i = 0; i < array.length; i++){
//         const num = array[i]
            // if(num % 2 === 0){
            //     evenArray.push(num)
            // }
//     }
        // return evenArray
// }

// evenNumbers([2,7,5,1,7,9,33,6,5])


// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.

const reverseWords = (string) => {
    const splitString = string.split(" ")
    const reverseArray = splitString.reverse()
    const joinedArray = reverseArray.join(" ")
    return joinedArray
    
}

console.log(reverseWords("This is a string about a dog"))


// Another way to do it is start at the back and loop backwards

// const reverseWords1 = (string) => {
//     const reversedSting = ''

//     for(let i = string.length - 1; i >= 0; i--){
//         reversedString += string[i]
//     }
//     return reversedString
// }

// console.log(reverseWords1("This is a string about a dog"))