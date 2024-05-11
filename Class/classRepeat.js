/**
 * Lets play with class
 */


// Declaration of class : 

// class Headphone{
//     // class body
// }



/**
 * Constructor Method : 
 

 * Start by declaring a class using the `class` keyword followed by th class name.
 * than -> Inside the class , define a special method called `constructor`. This method gets called automatically when creating a new instance of the class. Its more like a default function, constructor can have a lots of argument or parameter 
 * Its used to initialize the object properties
 
    Properties : 

        - These are the characteristics or attributes of object.
        - Inside the constructor or directly in the class body. You define properties using the `this` keyword.
        
    Methods : 
        - Methods are functions defined within a class.
        - They define what an object can do.


 * Instance Creation : 
        To create an object of a class or using a class simply use `new` keyword. followed by the className and any required arguments for the constructor.

 * Inheritance : anyone can create a new class based on an existing class. The new class inherits properties and methods from the existing class.
        Use `extends` keyword for inheritance ( using a class to create a new class)
 * Use Super method to use the thing that inherited from the class. 


 * Static Method : 
        
        - Methods that are called on the class itself, rather than on instance of the class .
        - Define `static` keyword. 

 * Getter and Setter Method : 
        - These are special methods used for getting and setting the values of private properties.
        - Use get and set keyword.
 */



class Headphone{
    constructor(color , type){
        this.color = color; // property
        this.type = type;
    }

    playAudio(){
        console.log('Playing audio with Dolby Atmos');
    }

    static info(){
        console.log('Hello Mom');
    }


    get color(){
        console.log(this.color);
    }

    set type(value){
        this.type = value;
    }
}



let oneplusHeadphone = new Headphone('red','neckband'); // creating a object of a class or using the class.

// accessing static method 

Headphone.info();






class Watch extends Headphone{
    constructor(color , type , batteryCapacity){
        super(color, type); // Here super method initializes the inherited properties.
        this.batteryCapacity = batteryCapacity;
    }



    
}
let watchAlerm = new Watch('red','smart',5000);
watchAlerm.playAudio();


