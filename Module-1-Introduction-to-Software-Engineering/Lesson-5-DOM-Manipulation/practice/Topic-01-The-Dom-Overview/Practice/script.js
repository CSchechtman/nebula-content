// Grab the elements and log them to the console


// Q1:  Attach this document to the index.html
console.log("Hello")

// Q2:  Grab the second element that has the text Hello
const secondHello = document.querySelector("#first")
console.log(secondHello)

// Q3:  Grab the text in the h1 that says 'Good Afternoon'
const gA = document.querySelectorAll('h1')
console.log(gA[2])

// Q4:  Grab the h1 with the text that says "Catch me if you can"
const catchMe = document.getElementsByClassName("catch-me")
console.log(catchMe)

// Q5:  Grab the span element and change the text to "Got ya"
const gotYa = document.querySelector("span")
console.log(gotYa)
gotYa.innerText = "Got ya";