// write a function that takes in an array of numbers and returns the sum of all those numbers

const sum = function(myArray) {
    // output variable here the sum
    let value = 0;
    // for loop through each element in myArray
    for(let i = 0; i < myArray.length; i++){
        // calculate whatever the function needs you to do
        value += myArray[i];
    }
    // return the output
    return value;
}

console.log(sum([1,2,3,4])) //10;


// write a function that removes all of the instances of the letter e from a string (case-insensitive)

function removeEs(str){
    // output variable
    let output = '';
    // for loop
    for(let i = 0; i < str.length; i++){
        let currentLetter = str[i];
        //conditionally remove es
        if(currentLetter !== 'e' && currentLetter !== 'E'){
            //add to our output
            output += currentLetter;
        }
    }
    return output;
}

console.log(removeEs('My name is abe')); // 'My nam is ab'

// write a function that takes in an array of numbers and doubles each number in that array [WITHOUT MUTATING THE ORIGINAL]

function doubler(array){
    //create output
    let newArray = [];
    // loop through each element in array
    for(let i = 0; i < array.length; i++){
        let currentNumber = array[i];
        // newArray[i] = currentNumber * 2; or this
        newArray.push(currentNumber * 2);
    }
    // return the output
    return newArray;
}


console.log(doubler([1,2,3,4,5])) // [2,4,6,8,10]

// write a function that takes in a string and removes any instances of an '!' or a space

function stringChanger(str){
    let output = '';
    for(let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        // if(str[i] !== '!' || str[i] !== ' '){  // always be true
        // if(str[i] === "!" && str[i] === ' ') //always be false
        if(currentLetter !== '!' && currentLetter !== ' '){
            output += currentLetter;
        }
        // if(currentLetter === '!' || currentLetter === ' '){
        //  
        // } else {
        //    output += currentLetter;
        // }
    }
    return output;
}

console.log(stringChanger('My n!ame is Abe!!'));

// write a function that takes in an array of numbers and finds the average of them

// write a function that takes in a number as an input and removes all odd numbers from it


// when to use vs when not to use

// we can use when we are enumerating through a collection of data in order to find some subset of data

// we should not be using it when we are asking for specific values in a collection of data

// write a function that prints out the last letter in a string

function accumulatorLastLetter(str){ //DON'T DO IT THIS WAY OVERKILL
    let output = '';
    for(let i = 0; i < str.length; i++){
        if(i == str.length) output += str[i];
    }
    return output;
}

function findLastLetter(str){
    return str[str.length - 1];
}

// write a function that takes a full name and gives me back their initials
// ie 'J Abe Johnson' = 'AJ'

function accumulatorFindInitials(name){
    let initials = '';
    for(let i = 0; i < name.length; i++) {
        let currentLetter = name[i];
        if(currentLetter == currentLetter.toUpperCase()){
            initials += currentLetter;
        }
    }
    return initials;
}

function findInitials(name){
    let names = name.split(' '); //names is an array of strings ['Abe','Johnson'];
    //names[0] = 'Abe';
    //names[0][0] = 'Abe'[0] = 'A'
    //names[1] = 'Johnson';
    //names[1][0] = 'Johnson'[0] = 'J'
    return names[0][0] + ' ' + names[1][0]
}
'`7&7&$!' === '!'.toUpperCase();


let myName = 'J Abe 135Johns!on!';
console.log(accumulatorFindInitials(myName),'vs' , findInitials(myName));

// main takeaway we can use the accumulator programming pattern to enumerate collections of data