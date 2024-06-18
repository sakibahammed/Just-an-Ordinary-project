class Car{
    constructor(make ,  model){
        this.make = make;
        this.model = model;
    }
    describe(){
        return `this cas is ${this.make} and its ${this.model}`;
    }
}


//tune the car using inheritance feature 

class RaceCar extends Car{
    constructor(make , model , engine , topSpeed){
        super(make, model);
        this.engine = engine;
        this.topSpeed = topSpeed;
    }

    raceTheCar(){
        const carDescription = `this car is super moded and the car has ${this.engine} its top speed is ${this.topSpeed} though its a originally a ${this.make} ${this.model}`;
        return carDescription;
    }
}



let myRaceCar = new RaceCar('toyota' , 'GR86' , '2Jz');

console.log(myRaceCar.raceTheCar());