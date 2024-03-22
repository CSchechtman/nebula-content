// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number
let creditCardNum = "1111-2222-3333-4444"


// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)
let last4SS = 5678

// Initialize a variable called userId, set it equal to a fake user ID

let userId = 17


// Initialize a variable called password, set it equal to a fake password

let password = "pa$$w0rd"


// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
let inputId = 17
let inputPass = "pa$$pass"


// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'

let text = (userId === inputId) && (password === inputPass) ? console.log(creditCardNum + " " + last4SS) : console.log ('incorrect username or id')