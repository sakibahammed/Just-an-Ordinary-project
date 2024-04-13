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

 Prototypal inheritance allows object to inherit properties and methods from other object 


     

   Lets imagine ,  we have some toys ,  Each toy has some special ability like they can talk or dance . suppose those 2 toys are honey and bunny.. Honey can sing and dance and play..
   
   
    After someday i was so bored playing with those , I felt that i need to create a new toy and named him Iron Man. but i felt that Iron man need to sing and dance. Training him again can take some time. So what can we do , We can take Honey and turn him into Ironman and in this way we can save and also teach Iron man how to sing and dance. 


    so like this .. We can create a object and that if we need to create another object that needs previously created object's keys we can simply inherit previously created object

     We use what we already have to make new things


# Built in Objects
    Also called Global Objects , 

        built in the language specification itself.

        
     There are numerous built in object with the Javascript language. 


        <ul>

            <li>Number</li>
            <li>Math</li>
            <li>Date</li>
            <li>String</li>
            <li>Function</li>
            <li>Error</li>
            <li>Boolean</li>
        
        </ul>

# Standard built in objects 

    Javascript standard, built-in object , including their methods and properties.

    Global object can be accessed using this operator in the global scope. The global scope consists of the properties of the global object, including inherited properties.  


    By category : 

    <h1>Value properties</h1>

       - globalThis
       - Infinity
       - NaN
       - undefined

    <h1>globalThis : </h1>
        the globalThis , Global property contains the global this value , 








# typeOf Operator

    Return or tell about the type of operand's value , 

        ==> simply say about the type or what the heck is this .
        ==> typeof returns a string always





# Type Casting 

        Type conversion means the transfer of data from one data type to another data type.

            -- like String to int 
            -- float to int
            -- int to string etc etc.

            String Conversion :     

                boolean to string 
                 like , 
                    let value  = true;
                    
                    value = String(value),

            Numeric Conversion: 

                just use Number() in this way

                    value = Number(value)
                

                Number('A quick brown fox jumps over the lazy dog');
                // as its a string an cannot turn into a number

                just use it like in this way , 
            
            console.log(Number('123'));
            console.log(Number('123z')) //return a NaN as z cannt be turn into in a number

            console.log(Number(true)) // 1
            console.log(Number(false)) // 0

            


            Boolean conversion : 

            console.log(Boolean(1)) // true
            console.log(Boolean(0)) // false
            console.log(Boolean('hello')) // true
            console.log(Boolean('')) // false


            // Any truthy value is casting in True
            // Any falsy value is casting in false
    Read this for more : [text](https://javascript.info/type-conversions)


# Type coercion 

    automatic or implicit conversion of one values from one data type to another (
        String to numbers . 
        Numbers to String .

    )


            Type Coercion example : 

                let a = '1';
                let b = 2;

                let sum = a+b // 12 

                    here js coerced the 2 from e Number to String than concat two number together.




# Type Conversion 

        Means transfer of data from one data type to another . Here implicit conversion happend when the compiler (for complied language) or runtime (or script language like Javascript)

        

# Explicit Type Casting (Coercion) 

    Commonly reffered as coercion. Involves using built in function or operators to convert a value from one type to another.   

        var x ='10';
        var y = 10.5;
        
        console.log(parseInt(x));
        console.log(parseInt(y));
        console.log(y.toString());

# Implicit Type Casting 
    under the hood type casting. Performs implicit type casting. conversion between types is automatically handled by the language during operation.


        let a = '1';
        let b = 2;

        let sum = a+b // 12 






# All About Loops in Javascript : 

    --Loops and Iterations: 

        for - loop : we all know what is for loop
        while loop : you know while loop
        do while loop : you know also

# Labeled Statemens     

    Control loop.. if we have multiple loop. and we want to control a specific loop than we should use labeled statement , 

        outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // This will break out of the outer loop when i is 1 and j is 1
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}


# Equality Comparison 

    Equality Algorithm
    == isLooselyEqual
    === isStrictlyEqual
    +0 , -0 is SameValueZero
    object.is is sameValue

    == vs === and Object.is

        == Loose equality , only check value not type 

        like 1 == '1' // true

        === strict equality , check both value and value type

        1 === '1' // false;


        another factor this things , in === , Js tries convert both using coercion. 


        like 0 == false // true;



    Object.is()

            This method performs a strict equality check like ' ===' , but it treats -0 & +0 as different and treat NaN as equal to itself.




# Control Flow

    How computer runs code from up to down , top to bottom.


# Conditional Statement 
     
    -- if.. else
    -- Switch 

    --if else : 

        everyone knows about this thing
    
    -- Switch : 

        Everyone knows about it also


# Exception Handling 

    Try - in this code block , it can occur problem or go wrong. put the risky action in the try block

    Catch - Work as a safety net. if the code inside the try dont work , catch handel this things.

    Finally - if the code is wrong in the try block or not we need to do this part here. We need to clear up.

    Throw - We can manually throw error here and the catch block will do the rest. The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.





    I need to grind in exception handeling a way more.







# Expression and Operators 

     Any valid unit or code that resolves to a value.    


# Expression 

    it can be anything ( single value , variable , operator , )


        5 // number  ,  'Hello' // String  , true // Boolean

        anything can be a expression. like function , operation , variables


# Operator 

    Perform operation on operands. 


# Arithmetic Operators 

    + , - , / , %

# Assignment Operators 

    = ,+= , -= , /= , %= , *=

# Comparison Operators 

    == , === , != , !== , > , < , >= , <=

# Logical Operator 

    && , || , ! 

# Unary Operator 

    ++ , -- ( 
        ++ == Incrementing operator
        -- == Decrementing operator

        these are unary operator
    )


# Ternary Operator 

    How the heck ternary operator works? 

    condition ? (if condition met than this will portion will execute) : (or this code will execute);

# Bitwise Operators 

    & // AND
    | // Or
    ^ // XOR
    ~ // NOT
    << // left shift
    >> // right shift

