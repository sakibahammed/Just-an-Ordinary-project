// this in a method :

/*
        when used in an object method,`this` refers to the object. 

    */

const person = {
  firstName: "sakib",
  lastName: "ahammed",

  fullName: function () {
    return this.firstName + " " + this.lastName; // here this method refer to the person object.
  },
};

console.log(person.fullName());
console.log(person["firstName"]);

// this Alone

/* When used alone this refers to the global object because this is running in the global scope */

let x = this;

console.log(x);

// this in a function (default)

/*
        In a function , the global object is the default binding for this.


*/

function myFunction() {
  return this;
}

myFunction();



//==> `this` in strict mode function :

   /*
    Javascript strict mode does not allow default binding. So when used in a function , in strict mode this is undefined.

   */ 


    "use strict";

    function myStrictFunction(){
        return this; // it will return undefined as strict mode doesn't allow default binding.
    }

    myStrictFunction();





const car ={
  make :'toyota',
  model: 'Camry',
  getDetails : function(){
    return `this is a ${this.make} ${this.model}`
  }
}

console.log(car.getDetails());



//using this keyword in a method : 

  const toyCar={
    color : 'red',
    speed : 5,
    drive: function(){
      console.log(`this ${this.color} car is now drive in ${this.speed}`);
    } // In the drive method , `this` is like a pointer to the `toycar` object. It helps us talk about the car's color and speed
  }


  console.log(toyCar.drive());



// using this keyword in Arrow function : 

  const toyotaCar = {
    color : 'blue',
    drive : function(){
      setTimeout(()=>{
        console.log(`the ${this.color} car is driving `);
      },5000);
    }
  }


  // in the drive method , the arrow function inside `setTimeout` still uses the same `this` as the `drive ` method because in doesn't have its own `this` . So it can talk about the car's color

  toyotaCar.drive()