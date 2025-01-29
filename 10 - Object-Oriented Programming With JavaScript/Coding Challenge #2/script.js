'use strict';

/*
Coding Challenge #2

Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

// Challenge #1
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10
//     console.log(this.speed);
// }

// Car.prototype.brake = function() {
//     this.speed -= 5
//     console.log(this.speed);
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// console.log(bmw, mercedes);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();


//Task 1
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10
        console.log(`The ${this.make} is accelerating and going at ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5
        console.log(`The ${this.make} is braking and going at ${this.speed}km/h`);
    }

    //Task 2
    get speedUS() {
        return  this.speed / 1.6;
    }

    //Task 3
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

//Task 4
const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
console.log(`${ford.speedUS} in mph`);
console.log(ford);
ford.brake();
console.log(`${ford.speedUS} in mph`);
console.log(ford);

ford.speedUS = 100;
console.log(`${ford.speedUS} in mph`);
console.log(ford);