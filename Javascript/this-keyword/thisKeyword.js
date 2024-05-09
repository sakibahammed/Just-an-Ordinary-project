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
