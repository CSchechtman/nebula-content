// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'
let letterArray = ['c', 'f', 'g', 'm', 'a', 'r', 'q', 's', 'p']

for(let i = 0; i < letterArray.length; i++){
    if(letterArray[i] === "a"){
        console.log(letterArray[i]);
        break;
    }
}

// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'
let numberArray = [3, 5, 14, 20, 7, 6, 2, 1, 15];
let numberFind = 7;

for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] === numberFind){
        console.log("At index " + i + " there is the number " + numberArray[i]);
        break;
    }
}



// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console
