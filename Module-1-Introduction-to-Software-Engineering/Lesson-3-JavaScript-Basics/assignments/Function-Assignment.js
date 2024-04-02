// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
const addOne = (array) => {
    let newArray = []
    for(let h = 0; h < array.length; h++){
        newArray.push(array[h]+1);
    };
    return newArray
};

console.log(addOne([1,2,3]))


// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false
const containsLetter = (string, letter) => {
    for(let k = 0; k < string.length; k++){
        if(string[k] === letter){
            return true;
        }
    }
    return false;
}
console.log(containsLetter("happy birthday", "a"))

// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
const names = ['Peter Parker', 'Tony Stark', 'Bruce Wayne']

const fName = (array) => {
    const firstName = [];
    for(let j = 0; j < array.length; j++){
        const currentName = array[j]
        const nameArray = currentName.split(' ')
        firstName.push(nameArray[0])
    }
    return firstName;
}

console.log(fName(names));


// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
const greeting = (name, greeting) => {
    return `${greeting} ${name}`;
}

console.log(greeting("John","Goodbye"))

// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23

const age = (birthYear) => {
    return 2024 - birthYear;
}

console.log(age(2000))

function dynamicAge(birthYear){
    let date = new Date()
    const currentYear = date.getFullYear()
    return currentYear - birthYear
}

console.log(dynamicAge(2000))
