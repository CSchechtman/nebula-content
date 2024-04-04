// 1. Create an object for a celebrity and save it to a variable
const matthewMcConaughey = {

};

// 2. Using dot-notation add 3 key-value pairs to the celebrity
matthewMcConaughey.age = 55;
matthewMcConaughey.birthplace = "Texas";
matthewMcConaughey.movies = "Reign of Fire";

// 3. Using bracket-notation add 3 key-value pairs to the celebrity
matthewMcConaughey['height'] = '6 foot';
matthewMcConaughey['job'] = 'actor';
matthewMcConaughey['catchphrase'] = "Alright, alright, alright!";
// console.log(matthewMcConaughey)

// 4. Write a function that allows us to add or update 3 properties
function updateObject(key, value){
    matthewMcConaughey.key = value
    console.log(matthewMcConaughey.key)
}

updateObject("height", "5_11")
updateObject("age", 56)
updateObject("movies", "The Gentlemen")

// 5. Using a loop - log all the celebrities properties to the console
for(let key in matthewMcConaughey){
    console.log(`${key}: ${matthewMcConaughey[key]}`);
}




const jack = {
    age: 45,
    hair: 'blonde',
    eyes: 'blue',
    height: 6
};

const jill = {
    age: 43,
    hair: 'brunette',
    eyes: 'brown',
    height: 5.5
};

const jim = {
    age: 15,
    hair: 'black',
    eyes: 'brown',
    height: 5.75
};

const jane = {
    age: 13,
    hair: 'blonde',
    eyes: 'brown',
    height: 5.5
};

const rex = {
    age: 2,
    human: false,
    hair: 'merle',
    height: 1
};

rex.age

const student = {
    fName: 'Craig',
    lName: 'Schechtman',
    age: '15',
    englishGrade: 'A',
    spanishGrade: 'C',
    mathGrade: 'A'
};

function updateStudent(key, value){
    student.key = value
    console.log(student.key)
}

updateStudent("spanishGrade", "A")