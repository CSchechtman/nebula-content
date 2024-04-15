// Synchronous vs Asynchronous

// Synchronous - code is run left right top to bottom
// Your computer executes one statement at time simplifying expressions as need
// is blocking

const sumOfFunction = () => 5

let x = 1;
x++;
let y = x;
x++;
let z = x;
let abc = (x + 1) - 5 + sumOfFunction();
let zzz = 45;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Asynchronous - multiple lines of code can be run at the same time
// specifically used with functions that take a long time to execute.
// is non-blocking 

async function doThingAsync() {
  console.log('starting a loading scene');
  sleep(10000).then(() => { // then with the data as a callback
    console.log('ending loading scene');
  });
  console.log('this happened instantly');
  let outputFromFunction = await sleep(1000); // await the function make it synchronous
  console.log('finally here', outputFromFunction);
}

const doOtherStuffAsync = async () => {

}

let x2 = 1;
doThingAsync();
let y2 = 2;
let z2 = 3;

let dadJokeFetch = fetch('https://icanhazdadjoke.com/random/joke', {
  Accept: 'application/json'
});
console.log(1, dadJokeFetch);

//googleFetch is a promise that can either be resolved or rejected
// but until it is resolved it will be stored as a Promise type

//you can use .then to wait on the result of the promise and do something with that data
dadJokeFetch.then(data => {
  console.log(data);
  data.json().then(result => console.log(result))
});