// 1. Write a function that takes in 1 number and returns that number + 1
// function addOne(num){
//     num++
//     console.log(num)
// }
// addOne(7)

function addOne(num){
    return num + 1
}

console.log(addOne(5))

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function goodnight(name){
    console.log(`Goodnight ${name}`)
}
goodnight("Craig")

const sayNight = (name) => {
    return `Goodnight ${name}`
}

console.log(sayNight("John"))

// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
function containsZero(array){
    for(i = 0; i < array.length; i++){
        if(array[i] !== 0){
            continue;
        }else{
        console.log('This array has the number zero in it')
        }
    }
}
let nums = [7, 14, 21, 0, 5, 4]
containsZero(nums)

// const hasZero = function(array){
//     if(array.includes(0)){
//         return "This array has the number zero in it"
//     }else{
//         return "None"
//     }
// }

// console.log(hasZero([2, 7, 6, 0, 5]))
// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloWorld10(){
    for(let i = 0; i < 10; i++){
        console.log("Hello World!")
    }
}

helloWorld10()

// 5. Write the prior function utilizing a 'fat arrow' function
const helloWorld = () => {
    for(let i = 0; i < 10; i++){
        console.log("Hello World!")
    }
}



