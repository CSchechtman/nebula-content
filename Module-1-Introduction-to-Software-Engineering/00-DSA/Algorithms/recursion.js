function recurse(){
    recurse() // this will recursively call the function recuse over and over until it gives you a stack overflow
}


//we can use a base case to stop a recursive function from running infinitely
function countdown(num) {
    console.log(num);
    if(num == 0) return 0 // this is called a base case but more on that tomorrow
    return countdown(num - 1);
}
countdown(10);



// function crashMyComputer(){
//     while(true){ //incursion
//         console.log(1);
//     }
// }


let numberOfTimesThisFunctionWasCalled = 0;
function fib(n){ //lets say n is 10
    numberOfTimesThisFunctionWasCalled += 1;
    if(n == 1) return 1;
    if(n == 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

 console.log(fib(10), numberOfTimesThisFunctionWasCalled);