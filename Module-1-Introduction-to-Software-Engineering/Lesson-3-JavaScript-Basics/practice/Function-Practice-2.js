// 1. Write a function that multiplies 3 input numbers together.
const mult3 = (num1, num2, num3) => {
    return num1 * num2 * num3
}

console.log(mult3(3,4,5))


// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
const oddToNum = (num) => {
    for(let i = 0; i < num; i++){
        if(i % 2 === 1){
        console.log(i)
        }
    }
}

oddToNum(17)
// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const names = ['Peter Parker', 'Tony Stark', 'Bruce Wayne']

const initials = (array) => {
    for(i = 0; i < array.length; i++){
        const singleEntry = array[i]
        const nameArray = singleEntry.split(' ')
        const fLetter = nameArray[0][0] + nameArray[1][0]
    }
}

initials(names)

// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
const doMath = (num1, num2, operator) => {
    
    if(operator === '+'){
        return num1 + num2
    }else if(operator === '-'){
        return num1 - num2
    }else if(operator === '*'){
        return num1 * num2
    }else if(operator === '/'){
        return num1 / num2    
    }
}        

console.log(doMath(3,4,'*'))

// 5. Write a function which takes in two arrays and returns those arrays combined together. 
const combine = (array1, array2) => {
    return array1 + "," + array2
}

console.log(combine ([1,2,3], [4,5,6]))
