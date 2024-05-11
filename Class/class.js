// lets explore Class.js


/*
    class solve many problem.. it works like a function but helps to create object




*/



class MyClass{ // skeleton of class
    constructor(){
        // what the heck is constructor ?
        // Constructor is a special method in a class that automatically runs when a new object is created with the help of the class. It is like a setup function that initialize the new object with specific values.

    }

    method1(){}
    method2(){}
}


// example of class 


class User{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

let sakib = new User('sakib ahammed');

sakib.sayHi()



// how the heck this thing work?

/**
 * The basic syntaxs are ,  
 *  new operator create a new object with all the listed methods. 
 *  the constructor() method is called automatically by new keyword. and we can initialize the object here.
 * when new user `sakib ahammed` is called , 
 *  - A new object is created.
 *  - The constructor runs with the given arguments and assign it to this.name.
 */


// What the heck is class ? ===> Its a function.
class MitthaSottiClass{
    constructor(name){
        this.name = name;
    }
    hello(){}
}
console.log(typeof MitthaSottiClass); // It returns a function.


// whats going on here ? 

/**
 * here MitthaSottiClass creates a function named user, that becomes the result of the class declaration. The function code is taken from the constructor method( assumed empty if we don't write such a method.)
 * Stores class methods. such as , hello() in User.prototype.
 
 */

// Class is not just a syntactic sugar.



