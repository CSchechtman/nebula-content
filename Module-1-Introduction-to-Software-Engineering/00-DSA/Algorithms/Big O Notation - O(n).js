/*
Big O is a measurement of Space & Time Complexities of a solution
*/

//O(N)
function ContainsValue(elements, value)
{
    //for(var element in elements)
    //{
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
        if (element == value) return true; 
    }     
    return false; 
}

console.log(ContainsValue(['a','b','c','d',1,2,3], '3'))


//O(N^2)
let count = 0;
function ContainsDuplicates(elements)
{
    for (var outer = 0; outer < elements.length; outer++) 
    {
        for (var inner = 0; inner < elements.length; inner++) 
        {
            count++;
            // Don't compare with self 
            if (outer == inner) continue;             
            
            if (elements[outer] == elements[inner]) return true; 
        }
    }    
    return false;
}


console.log(ContainsDuplicates(['a','b','c','d',1,2,3,'4','z']))
console.log(count);


// Efficiency of your code
// Time / space complexity
// O(N) = o is your algorithm N is the number of inputs

// O(1) = Constant
// no matter how many inputs you put into this algo the time or space complexity will not change

function consoleLogMe(inputs) {
    console.log('Hello World');
}

let Naruto = {
    name:'Naruto',
    techniques:['Shadow Clone Jutsu']
}
pullDataFromObject(Naruto);

function pullDataFromObject(obj) {
    console.log(obj.name);
    obj.lastName = 'Uzumaki';
}

// O(N) = Linear
// The larger the input is the longer it will take to execute / more memory it takes up

let numbers = [4, 6, 135, 5, 53, 51];
console.log(sum(numbers));
console.log(numbers.reduce((output, currentNumber) => output + currentNumber, 0));

function sum(array){
    //create an accumulation output
    let output = 0;
    //go through each element in array
    for(let i; i < array.length; i++){
        let currentNumber = array[i];
        //reassign it to our output
        output += currentNumber
    }
    return output;
}

//Still O(5N) = O(N); 
function sum5times(array){
    return sum(array) + 
    sum(array) + 
    sum(array) + 
    sum(array) + 
    sum(array);
}

let names = ['Kelly','Daniel','Jordan','Abe','Eric']; //even though there are 5 elements in this array
findDuplicateInArray(names);
// O(N^2+) or higher Quadratics

function findDuplicateInArray(elements){
    for (var outer = 0; outer < elements.length; outer++) 
    {
        for (var inner = 0; inner < elements.length; inner++) 
        {
            if (outer == inner) continue;             
            
            if (elements[outer] == elements[inner]) return true; 
        }
    }    
    return false;
}

// O(Log N) logarithmic time
// its similar to O(N) but filters results

let bigArray = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];

findNumberLogarithmically(bigArray, 60);

function findNumberLogarithmically(array, numberToLookFor){
    //THIS IS O(N)
    // for(let i = 0; i < array.length; i++){
    //     let currentNumber = array[i];
    //     if(currentNumber === numberToLookFor) return true;
    // }

    array.sort((a,b)=>a-b);
    let arrayCount = array.length;
    for(let i = Math.round(array.length * .5); i < array.length;) {
        let currentNumber = array[i];
        if(currentNumber === numberToLookFor) return true;
        arrayCount = Math.round(arrayCount * .5);
        if(currentNumber > numberToLookFor) i -= arrayCount;
        else i += arrayCount;

    }
    return false;
}



