// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.bCreate an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)

const car = {
    color: 'Tiger Eye',
    engine: ['320hp', "2.0L VTEC Turbo", "FWD"],
    wheels: 4,
    manual: true,
    model: "Integra S",
    make: "Acura"
};


// 2. Using dot-notation Log to the console 3 properties from the previous object
console.log(car.color)
console.log(car.engine)
console.log(car.make)



// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['wheels'])
console.log(car['manual'])
console.log(car['model'])



// 4.Try and log a property that doesn't already exist - what output do we get?
console.log(car.year)
undefined



// 5.bAdd a new key-value pair to the vehicle. 
car['interior'] = 'Ebony';



// 6. Using bracket-notation update a property on the vehicle. 
car['color'] = 'Apex Blue'



// 7. Using dot-notation update a property on the vehicle. 
car.engine=['320hp', "2.0L VTEC Turbo", "FWD", "6MT"]



// 8. Create a method for turning your vehicle on
function startCar(){
    console.log("The car is on");
    car.isOn = true
}

car.start = startCar;

car.start();


// 9.Create a method for turning your vehicle off
function stopCar(){
    console.log("The car is off");
    car.isOn = false
}

car.stop = stopCar;

car.stop();
console.log(car)



//10.   
// // a. Check if your vehicle is on (it should be off)
// // b. Start your vehicle
// // c. Check if your vehicle is on (it should be on)
// // d. Stop your vehicle
// // e. Check if your vehicle is on (it should be on)


if(car.isOn){
    car.stop()
}else{
    car.start()
}


