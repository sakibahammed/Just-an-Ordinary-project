# Just-an-Ordinary-project
Nothing Interest , I am bored thats why i create this.  and the name of this project says it all




# What the heck is Javascript : 

 
<p>  Javascript is a dynamically typed , multi-paradigm , prototypical based , oop,  high level , interpreted asynchronus programming language which have Cross - platform capability , can be used in both server and client a Great programming Language I Loved </p>

Power of JS : 

    1. Dynamically Typed : JS facilliates flexible data manipulation by dynamically assigning data types during run time , 

    2 . Prototype-based inheritence : Objects in js inherit properties and behavior directly from other objects.

    3. Crose-platform - supported by all except Onion 

    4. Server side development - Easily server side accessible .





# Javascript - version :

    Achieve ECMA standard in 1997 and become ECMAscript , it has ES1 , ES2 , ES3 , ES5 , ES6

# Hoisting : 

    JavaScript Hoisting means that before executing the code, the interpreter moves the declarations of functions, variables, classes, or imports to the top of their scope.


    // Hoisting includes ; function() , function* , async-function , async-function*

# Variable Naming Rules : 

    Use Descriptive names : Choose meaning full variable naming convension
    Like declaring a persons age : 

        let age = 25;
        const name = sakib;

    Use camel case for multiple word in variable , 

        let firstWord = 'Hello world' ;
    
    Avoid reserved word : 
        let let=5 // Here i use let as a variable name;
        
    Be consistent :

        consistent naming convention throughout the code base
    
    
    Use meaningful variable names : 

        Choose variable names according

    Avoid Single letter variable names (except in certain cases):
        Single letter variable names are legal but not accepted 

#Variable Scopes : 

    Variable scope refers to the region or context in the code where a variable is defined and can be accessed. 

        simple term :   where a variable is available to access in js code.


    Global Scope : 
        Variable declared outside of any function or block , They can be accesed from any where of the code.
    
    Block Scope : 
        Variables declared using let Const have block scope. 
        Block scope refers to any code block enclosed in braces ' {} ' such as loops. ( for , while ). Conditional statements ('if' , 'else') . Functional blocks
    
    Lexical Scope : 

        Static Scope , Lexical scope means that the accessibility of variables is determined by their location within the code when its written. 
    


# Primitive Type (Values , Data)

    Primitive type and value , data are : Number , String , Boolean , Undefined , Symbol , BigInt , Null

# Number 
    These are numeric values , both integers , floating point numbers 

  
        let number = 10;
        let smallNumber = 23;
        let floatingNumber = 23.42;
        let integer = 1;
    

# String 
    This is mainly string. Represent text data and values withing quotes ( single or Double )


        let javascript = 'Hello mom';
        let helloWorld = 'Hello world';


# Boolean 
    Only show True and False 

        let isLooged = true;
        let isOpen = false;

# Undefined 
    
    A variable that has been declared but not assigned a value

    let x;
    console.log(x);

# Null : 

    Absence of any value; 

        let y = null;

# Symbol : 

    Originated from ES6+ , Requesting unique identifier, Useful for creating object properties that are hidden from enumeration. 

# BigInt : 
    Originated from ES11+ represent whole larger than the maximum safe integer provided by the number type


        
# Object Object Object
    
    - Non Primitive Data type. 
    - Empty object can be created using one of two syntax;

    Empty Object : 
        
        // Creating an empty object

            let user = new Object();
            let user1 = {};

    
    Object carries key values pair. 

    let object = {
        key : value,
        key1 : value1
    };

    Get or access object keys and values from object

    console.log(object.key);

    console.log(object.key1);


    a object can carry any things (a object values can be : String , Int , Floating point , Boolean , Symbol === Any thing);



    set a key-value pair in a object

        user.isAdmin = true;

    Remove a property from Object 
        
        delete object.key

    Using multiword property names , need to be quoted : 

        let user = {
            mom : 'Hello Mom',
            "likes bird" : true
        } 

    Square brackets :

        for multiple word properties dot notation wont work . use bracket notation

        console.log(user['mom']);

        delete user['likes bird'];

# Object on user input and declaration 

        let name = prompt("What is your name");
        let age = prompt('What is your age');


        let user = {
            [name] : [age];
        }

    //  here bracket notation helps to get values from the user or code base;


# Property value shorthand:

    Using existing variables as values : 

        function makeUser(name, age) {
                return {
                    name: name,
                    age: age,
                    // ...other properties
                };
                }

            let user = makeUser("John", 30);
    
# Property Name limitations : 
   there is no limitations when declaring as a property . They are automatically converts in to string



# find out if a property exists in a object ; 

    if dont find out that it will return undefined
    use in method to check ;

        let user = {
                name : 'jhon',
                age : 13
        }

        console.log( age  in user) // it will return true 

        We can also use undefined as a check mathod , 

        like , 

            console.log(user.name === undefined);
        

        But in method always works correctly here , 

            like if a object has a property that already have a value as undefined that it will become true.. so in is good

        I am talking about this , 
            let obj = {
                test : undefined;
            }
# looping On Object



    use for..in for looping on object

        let users = {
                name : 'jhon',
                age : 30 , 
                isAdmin : true
        };

        for(name in users){
            console.log(name);
        }


# Ordered like an Object;

        let codes = {
            '49' : 'Germany',
            '48' : 'Dhaka',
            '1' : 'nepal'
        }

    for(let code in codes){
        console.log(code) // 1 , 48 ,49 // Here everything is sorted by default.
    } 
    
    // To fix this solution just add a non-integer symbol before this 
 

# Prototypal inheritance

   <p style="color:tomato"> Prototypal inheritance allows object to inherit properties and methods from other object </p>


     


