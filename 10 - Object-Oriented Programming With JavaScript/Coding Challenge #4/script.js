'use strict';

/*
Coding Challenge #4

Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
   and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

//Challenge #3
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}Km/h`);
// }

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}Km/h`);
// }

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge --;
//     console.log(`${this.make} going at ${this.speed}Km/h, with a charge of ${this.charge}%`);
// }

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();

//Task 1
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed}Km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed}Km/h`);
        //Task 3
        return this;
    }
}

class EVCl extends CarCl {
    //Task 2
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        //Task 3
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed}Km/h, with a charge of ${this.#charge}%`);
        //Task 3
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

//Task 3
rivian.accelerate().brake().chargeBattery(90).accelerate();