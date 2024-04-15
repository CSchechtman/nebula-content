var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    { firstName: 'Bryan', lastName: 'C.', country: 'Montenegro', continent: 'Europe', age: 51, language: 'PHP' },
    { firstName: 'Tyrus', lastName: 'F.', country: 'USA', continent: 'North America', age: 43, language: 'Python' },
    { firstName: 'Shannon', lastName: 'F.', country: 'Sweden', continent: 'Europe', age: 49, language: 'C' },
  ];

// return a list of all the first names of all the developers
// -forEach / reduce
// -map
function firstNames(arr){
    // let output = [];
    // arr.forEach(person => output.push(person.firstName));
    // return output;

    return arr.map(person => person.firstName);
}

// return a list of users that are from a country that starts with M
// -filter
function findMCountryUsers(arr){
  return arr.filter(person => person.country[0] === 'M' || person.country[0] === 'm');
}

// console.log(findMCountryUsers(list1));
// return the combined age of all the developers
// -reduce
function findCombinedAgeOfUsers(arr){
  return arr.reduce((totalAge, person) => totalAge + person.age, 0);
}
console.log.apply(null, [findCombinedAgeOfUsers(list1)]);

// find the average age of a php developer
// add up all the ages divide by the length

function medianAgeOfPhpDev(arr){
  // filtering out all the php devs
  const phpDevs = arr.filter(dev => dev.language === 'PHP');
  let age = phpDevs.reduce((sum, dev) => sum + dev.age, 0);
  // reduce to sum them up
  return age / phpDevs.length;
}
console.log(medianAgeOfPhpDev(list1));

// list of python devs sorted alphabetically by first name
// -filter
// -sort
function pythonDevsSortedAsc(arr){
  return arr
    .filter(person => person.language === 'Python')
    .sort((a, b) => a.firstName > b.firstName)
  /*let pythonDevs = arr.filter(person => person.language === 'Python');
  let sortedDevs = pythonDevs.sort((a, b) => a.firstName > b.firstName);
  return sortedDevs;*/
}

// sort the devs by language alphabetically then combine all of their last names
// -sort
// -reduce

function createDatabasePassword(arr){
  let sorted = arr.sort((a, b) => a.language < b.language ? -1 : 1);
  return sorted.reduce((lastNames, person) => lastNames + person.lastName, '');
  // let output = '';
  // for(let i = 1; i < sorted.length; i++){
  //   output += sorted[i];
  // }
  // return output;

}
console.log(createDatabasePassword(list1));

// create an output that contains a list of 
// all of the countries
// all of the continents
// all of the programming languages
// no duplicates!!!

function getDevSummary(arr){
  // reduce
  //forEach
  /*let output = {
    countries: [],
    continents: [],
    languages: []
  };
  arr.forEach(person => {
    if(!output.countries.includes(person.country)){
      output.countries.push(person.country);
    }
    if(!output.continents.includes(person.continent)){
      output.continents.push(person.continent);
    }
    if(!output.languages.includes(person.language)){
      output.languages.push(person.language);
    }
  });
  return output;*/

  return arr.reduce((output, person) => {
    if(!output.countries.includes(person.country)){
      output.countries.push(person.country);
    }
    if(!output.continents.includes(person.continent)){
      output.continents.push(person.continent);
    }
    if(!output.languages.includes(person.language)){
      output.languages.push(person.language);
    }
    return output;
  } ,{
    countries: [],
    continents: [],
    languages: []
  });
}
console.log(getDevSummary(list1));

// const expectedOutput = {
//   countries: ['Monaco','Mongolia'],
//   continents: ['Europe', 'Asia'],
//   languages: ['PHP', 'Python'],
// }