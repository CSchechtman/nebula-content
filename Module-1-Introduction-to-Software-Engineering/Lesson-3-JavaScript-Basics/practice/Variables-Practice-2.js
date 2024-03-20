// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

const fName = 'Craig'
const lName = 'Schechtman'
const houseNum = '5'
const street = 'Grace Park Drive'
const city = 'Commack'
const state = 'New York'
const zip = '11725'

const address = `${fName} ${lName} 
${houseNum} ${street}
${city}, ${state}
${zip}`

console.log(address)

/*
First-Name Last-Name
House-Number Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/


