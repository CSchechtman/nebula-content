// const heading = document.createElement("h1");
// document.body.appendChild(heading);
// Creates a new h1 object on the document.
// const first = document.querySelector("#first");
// Selects the first object that has a "first" ID and assigns it the variable "first".
// first.innerText = "Second" 
// Changes the text in the "first" object to "Second".

const div = document.createElement("div");
document.body.append(div);
div.style.backgroundColor = 'red';
div.innerText = "Hello";
document.querySelector("div").style.backgroundColor = "red";

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    console.log("Clicked");
})

setTimeout(e, 5000);

function boo() {
    document.getElementById("output").innerText = "Boo! I scared you!";
}
