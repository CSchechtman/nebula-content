// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

// Your task is to remove all duplicate words from a string, leaving only single(first) words entries.

//     Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// input string
//  output string

// split string into array
// loop over array
// for each word, compare the item in the array to a second array. if the second array doesn't include the word, add it to the array
// return second array
let answerArray = {""};
for(let i = 0; i <input.length, i++){
    if(!(answerArray.includes(input[i]))){
        answerArray.push(input[i])
    }
}

let answer = answerArray.join(" ");
return answer;


// eric answer:
// function removeDuplicateWords (s) {
//     // your perfect code...
//     // input: string 
//     // output: string
//     // convert our string into array of words
//     // create our object to track words
//     // get all of the keys 
//     // convert to string
    
//     const words = s.split(' ')
//     const wordObj = {}
    
  
//     for(let word of words){
//       if(!wordObj[word]){
//         wordObj[word] = true
//       }
//     }
    
//   const keysArr = Object.keys(wordObj)
  
//   return keysArr.join(' ')
  
//   }

// function removeDuplicateWords (s) {
//     const set = new Set()
    
//     const words = s.split(' ')
    
//     for(let word of words){
//       set.add(word)
//     }
//       return [...set].join(' ')
//     }