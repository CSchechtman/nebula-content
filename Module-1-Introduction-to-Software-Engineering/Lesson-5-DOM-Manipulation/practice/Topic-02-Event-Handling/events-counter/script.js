// COUNTER EXERCISE

// Select the body element from index.html
document.body.style.background = "green";

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

/* -------------------------------------------------------------------------- */

// Create an h1 element
let newH1 = document.createElement('h1');

// Append a new h1 element to the body element as a child
document.body.appendChild(newH1)

// Add text to the h1 element 
newH1.innerText = '0';

// Assign the background color of this element to something unique
let holdH1 = document.querySelector('h1');
holdH1.style.backgroundColor = "red";

// Set a new style attribute to the h1 element
holdH1.setAttribute('style', "color:white");

// Add font size to the h1Element
holdH1.setAttribute('style', "font-size:30px");

// Set the default text to the number zero

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
let newButton = document.createElement('button');


// Append the button element to the body element
document.body.appendChild(newButton);
// Add text to the boxButton
newButton.innerText = "Increase";

// Add a class attribute to boxButton
newButton.classList.add("button")

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
let newButton1 = document.createElement('button')
document.body.appendChild(newButton1);
newButton1.innerText = "Decrease";

// Add the button element to the body element

// Add text to the button element

// Add a class attribute of style to the button element
newButton1.classList.add("button");

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value
const click1 = document.querySelector("button");
let valueInnerText = holdH1.innerText;
console.log(valueInnerText)

click1.addEventListener("click", (e) => {
    holdH1.innerText++;
})
console.log(click1)

// Create functionality that, when you click this button it decreases the h1 value
const click2 = document.querySelectorAll("button")[1];

click2.addEventListener("click", (e) => {
    holdH1.innerText--;
})
console.log(click2)

/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
let newButton2 = document.createElement('button')
document.body.appendChild(newButton2);
newButton2.innerText = "Delete";
newButton2.classList.add("button");
const click3 = document.querySelectorAll("button")[2];
click3.addEventListener("click", (e) => {
    newH1.innerText = '0';
})
console.log(click3)

