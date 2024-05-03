# Just-an-Ordinary-project

Nothing Interest , I am bored thats why i create this. and the name of this project says it all

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

Lets imagine , we have some toys , Each toy has some special ability like they can talk or dance . suppose those 2 toys are honey and bunny.. Honey can sing and dance and play..

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

    delete , void , typeOf
    ++ , -- (
        ++ == Incrementing operator
        -- == Decrementing operator

        these are unary operator
    )

# Ternary Operator / Conditional Operator

    How the heck ternary operator works?

    condition ? (if condition met than this will portion will execute) : (or this code will execute);

# Bitwise Operators

    & // AND
    | // Or
    ^ // XOR
    ~ // NOT
    << // left shift
    >> // right shift

# Function Hoisting

    Hoisting is the thing we both know how it works.

    Hoisting means that before executing the code, the interpreter moves the declarations of functions, variables, classes, or imports to the top of their scope.

# Scope and the function stack

    reffer to and call itself.

        1. Function's name
        2. argument.callee
        3. An in-scope variable that refers to the function.

# Recursion

    a function can refer to and call itself. Recursion is analogous to a loop. Both execute the same code multiple time/ and required a condition to break the loop.

# Nested Functions and Closure

    Nest a function within another function. The nested function is private to its containing function also forms a closure.


    A closure is an expression commonly , a function that can have free variables together with an environment that bindes those variables.(that closes the expression)

# Closure

    A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. In simpler terms, a closure is created when a function "remembers" its surrounding context (enclosing lexical environment) even when it is executed outside that context.


    --- Closure in More easy way to understand :

        //Closure is

    Closure enable functions to retain access to variables defined in the outer function even after the outer function has finished executing.


    Closure is used for data privacy , event handling and asynchronous programming. Works good with privacy

# IIFE : Immediately invoked function expression

    a javascript function that runs as soon as it is defined.

    self executing anonymous function .
    02 mazor parts :


        1. Anonymous function with lexical scope enclosed within the grouping_operator(). prevents accessing variables within IIFE idiom as well as polluting the global scope.

        2. Second part creates the immediately invoked function expression() through which the js engine will directly interpret the function.


    use case :

    -    avoid polluting the global namespace.
    -    execute an async function.
    -    the module pattern
    -    for loop with var before ES6

# The Arguments object :

    Argument is and array like object accessible inside function that contains the value of the arguments passed to that function.


    The argument object is a local variable available within all non-arrow functions. refer to a function argument inside that function by using its argument object. It has entries for each argument the function was called with , with the first entry;s index at 0.

    the argument object is useful for function called with more argument than they are formally declared to accept , called variadic function. such as math.min().

    we can use argument.length to count how many argument the function was called with.


    Assingning to indices :

        each argument index can also be set or reassigned :

        argument[1] = 'new value';

    Non strict function that only have simple parameter (that is , no rest , default , or destructed parameter) will sync the new value of parameters with the arguments object and vice versa.


    for more read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

# Scope and function stack :

    Scope : A space / environment in which a particular variable or function can ba accessed or used .

    Global Scope : Default scope for all code running in script mode.

    Module Scope : The scope for code running in module mode .

    Function Scope : the scope created with a function.

    Block scope : The scope created with a pair of curly braces (a block).

# Function Stack (Call stack) :

    The function stack is how the interpreter keeps track of its place in a script that calls multiple functions , like which function is currently executing and which function within that function are being called.

# Call stack :

    Call stack is a mechanism for an interpreter to keep track of its place in a script that calls the multiple function.

    In more easy way :

        Call stack is like a to-do list for functions. It helps the program keep track of which function it is currently running and which function it meets to run next.


    Stack of function :
        imagine a stack of plates. call stack works similarly, but instead of plates it holds functions.

    Function gets called :=

        when we called a function the program puts it on top of the call stack.

    Function run :

     THe program runs the function thats on top of the call stack

    Function finishes :
        when the function finishes running, it is removes from the top of the call stack.



    Think of the call stack like a stack of sticky notes on your desk:

Function Call: When you call a function, it's like writing down a task on a sticky note and putting it on top of the stack.
Function Runs: The function starts running and the program works on the task written on the top sticky note.
Function Finishes: Once the function is done, the program removes that sticky note from the top of the stack and looks at the one below it.
Next Function: The program keeps working through the sticky notes in order, from top to bottom.
Here's an example to make it clearer:

javascript
Copy code
function functionX() {
console.log("In function X");
functionY(); // Calls functionY
console.log("Back in function X");
}

function functionY() {
console.log("In function Y");
functionZ(); // Calls functionZ
}

function functionZ() {
console.log("In function Z");
}

// Let's start by calling functionX
functionX();
Here's what happens:

You call functionX(), so a sticky note for function X goes on the stack.
While in functionX(), you call functionY(). Now, a sticky note for function Y goes on top of the stack.
In functionY(), you call functionZ(). So, a sticky note for function Z goes on top of the stack.
Once functionZ() finishes running, the sticky note for function Z is removed from the stack.
The program then goes back to the functionY sticky note and continues running functionY().
Once functionY() finishes, its sticky note is removed from the stack.
Now, the program is back to the functionX sticky note. It continues running functionX() and finishes.
Finally, the functionX sticky note is removed from the stack.
In short, the call stack keeps track of what the program is doing and which functions it needs to finish.

# Recursion

    Recursion is a function recalling system..

    Recursion is when a function call itself.



    How the  heck this recursion works :

        1 . Task Repetition :
            The function does a task than call itself to the task again with different input.
        2. Stopping point : at this segment function stop calling itself.

# Lexical Scope of function :

    A function can access variables from it own scope , the outer scope , and the outer function scope and global scope,

        like :

        Inside  the function : Variable defined within the function can be accessed inside the function.
        outside of the function : The function can also access variables from the outer function.

        Outside the function : function can also access variables from the outer function.

        Global scope : The function can also access variables from the top level code that is not inside any function.

    Lexical function is all about where the function is defined

# Closure

    closure is the combination of a function bundeled together with reference to its surrounding stat.


    Closure gives the access to an outer function scope from an inner function. ..

    A closure happens when a function remembers and keeps using variables from its outer function, even after the outer function is done running.


    How Closure Work :
        1. Function inside a function,- define a function inside another function.
        2. The inner function remember the variable from the outer function and can use them.
        3. Using Closure : Even after the outer function is finished , the inner function still has access to the variable from the outer function.



        ==> so the closure , is when an inner function keeps using the outer function's variables , even after the outer function is done running. This lets work with data from an outer function even after that function is gone.

# Built in Function in Javascript :

    In JavaScript, built-in functions are functions provided by the language itself. These functions are part of JavaScript's standard library and are ready to use without needing to define.

    Follow these links:

    - https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

    - https://www.tutorialride.com/javascript/javascript-built-in-functions.htm

    - https://dev.to/elpepebenitez/built-in-methods-in-javascript-4bll

# Rest Parameters :

    Rest parameter allows a function to accept an indefinite number of argument as an array.

    rest parameter allows to collect any number of argument passes to a function and put them in an array,


    - how the heck rest parameter works :

        Function with rest parameter : use three dots . (...) followed by name , in the function.

        Argument as an Array : arguments passed will be collected into an array using the name provided.

        Using the array : We can use it inside the function.

# Asynchronous JavaScript -

    Asynchronous programming is a technique that enables to program to start a potential long running task and still be able to be responsive to other events while that task runs, rather than having
    to wait until that task has finished. once that task has finished , program is presented with the result.


    asynchronous js allows to perform task without waiting for them to finish before moving to other task.. it also means like parallel programming.

# SetTimeout :

    setTimeout is an asynchronous function. that means , the time function will not pause execution of other function in the function stack.

    It cannot be used as a pause

    - delay a function's execution for a specified amount of time .

    - takes a function and a delay in milli-second.

    - function execute after the specified delay.

    console.log("Start");

    setTimeout(() => {
      console.log("This happens after 2 seconds");
    }, 2000);

    console.log("End");

    check on this link for more :
    https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

# Set interval and clear interval :

    Setinterval execute a function repeatedly at a specified interval (in millisecond) . This function allows to run a particular block of code at regular intervals.


    ==> how the heck setInterval works ;

    let intervalId = setInterval(callBackfunction, intervalinMillisecond);

    callBackFunction is the function that execute repeatedly.

    Stopping the interval.. ==> clearInterval()


    - Use setInterval to execute a function at regular intervals
    - Pass the function you want to execute as the first argument and the interval in milliseconds as the second argument.

    - Use clearInterval to stop the interval when needed.

# Call Back in Asynchronous function :

    - A call back function is a part of code that is called when an asynchronous operation like fetching data or saving file is finished. this allow the program to do other things while waiting for the main task to finish.


    In easy way : suppose ,  you are baking cookies with your family. You're mixing ingredients in a bowl, and you put the cookies in the oven to bake. While the cookies are baking, you go and play outside.

    Now, your parent tells you, "When the cookies are done baking, I will call you back inside." This is like a callback function!

# Callback Hell

    Callback hell is  a problem that arises in asynchronous programming when there are too many nested callbacks in code.

    This can lead to code that is difficult to understand and maintain.




    - Understading Callbacks :

        - A callback is a function passed as an argument to        another function.
        - The callback is executed at a later time, often when an asynchronous operation completes.
        - Callback are widely used in event-driven programming.

    - Recognizing Callback hell :


        When callback hell occured :

            - Deep nesting : Callback occured when there is a deep nesting of callbacks, making code hard to follow.


            - Complex control flow : The control flow of the program becomes complex and challenging to understand .


            - Difficult Debugging : Debugging deeply nested callbacks can be challenging becaus stack traces can become convoluted.


            - Difficult Error Handling : Error handling becomes complex, especially if there are errors at different levels of the chain.




    Read this for more about callback hell :

    https://javascript.info/callbacks#pyramid-of-doom



    - How to fix callback hell :

        Promises: Promises provide a cleaner way to handle asynchronous operations and avoid deep nesting.

    - Async/Await: This syntax built on top of promises allows asynchronous code to be written more linearly.
    
    - Modularizing Code: Breaking down complex code into smaller,    more manageable functions can help.
    
    - Error Handling: Proper error handling techniques such as try/catch blocks (with promises) can improve code readability.
   
    - Control Flow Libraries: Some libraries (e.g., async.js) provide higher-level abstractions to manage asynchronous control flow.





# What the heck is Promise in Javascript 

    - fun staffs. 

    imagine , you asked your friend for a cookie,but he didn't have those with him that moment.. So he promise to give the cookie later. so you had to wait... 


    Promise in javascript is like kinda work like that way , 

        Its a fun way to say , " Hey I don't have this thing right now, But i'll get it for you later. ",
    
    How the heck this thing work : 

        -- Creating a Promise : its like a promise , " i promise ill give you the cookie when i ll have one for myself "

        -- Waiting for the promise : While you wait for the cookie, you can do other things.

        -- When the promise is ready : When you get the cookie , you are happy.

        -- if there is a problem : Sometimes you might not get the cookie . In that case they tell you sorry. then you know that something is wrong.. 

        -- Chaining promise : Sometime after you get the cookie, you do what you want to do.. you can ask for milk or anything you might like...

        
    So , promise help to ask something.. wait for it , do other things while you wait like drink milk or other activity etc etc.. but if fall in a problem it will say sorry. if not then get the cookie and do things you love. 



# async & await ; 

    async and await are keywords used in programming language like javascript , and python to handel asynchronous programming more easily and readably. 


    asynchronous programming allows a program to execute tasks without waiting for each one to complete before moving on to the next. it helps in making programme more efficient especially when dealing with time consuming task lke making network.



    ==> Async keyword : 

            - Use async keyword to define an asynchronous function.
            - An asynchronous function can use await inside it to wait for promise to resolve.
            - When you call an async function in returns a promise .


    ==> Await keyboard : 

            - Await keyword is used inside an async function to wait for a promise to resolve. 

            - It pauses the execution of the async function until the promise resolve . 


    How the heck they help : 

        - Improved Readability : Async and Await make asynchronous code look similar to synchronous code which make it easier to understand.

        - Efficiency : Programme can handle other task while waiting for and async operation to complete. 




# API

    API stands for Application Programming Interface.

    API allow different software to communicate and share data. 

    Key Concept of API : 

        HTTP Method : 

            - GET : Retrieve data from an API
            - POST : Send data to an API to create a resource
            - PUT : Update an existing resource
            - Delete : Remove an resource

        API Endpoint : 

            An endpoint is a URL that represents a specific resource or action provided by an API

        JSON : Javascript Object Notion.



    Handling Errors and Responses : 

        - Response Status Code : Always check response code of API.
        - Error Handling : Use'try/catch' block to handle error when making requests. If the request fails it will handle the error gracefully. 


    Working with JSON Data : 

        API Often return data in JSON format( structured data format)
        
        # use response.json() to parse tha JSON data
        
        # To send data in JSON format (example : POST request), convert js object to a JSON string using , 
        
        JSON.stringify()


    Quick Advice : 

        * Read API documentation
        * Check the response header
        * Manage Authentication.




#  XMLHttpRequest 

    An XMLHttpRequest (XHR) is an API provided by web browsers that allows web developers to send HTTP requests and receive HTTP response.


    in more easy way , 



    key feature of XMLHttpRequest : 

        Asynchronous Communication ,HTTP Methods , Request Headers , Response Handling , Cross-origin request , 


   1. Creating an XMLHttpRequest Object : 
   
     To start , create an instance of the ' XMLHttpRequest ' object.

   2. Setting up the Request :
    
     You need to configure the request. This involves specifying the HTTP method .

   3. Setting Up the Event Handlers : 

     You can set up event handlers to handle different stages of the request = (onload) , When the request complete successfully , 'onerror' , 'onreadyStatechange' for when the request's state changes .

    4. Sending the request : Once the request is set up and the event handlers are configured , you can send the request.

    5. Optional: Sending Data with a POST request : if you want to send data with a request ( for example , using POST method ), you need to set the request (for example , using the POST method) , you need to set the request headers and include the data in the send() method. 

    6. Handling CORS : If you are making requests to a different domain ( cross - origin requests ) , you may need to handle CORS policies. The server should return appropriate headers to allow cross-origin requests. 



    # Key Feature of XMLHttpRequest : 


    ==>    Asynchronous Communication : Allows to send requests and handle responses without blocking the rest of the code. 

    # HTTP Methods : Supports methods like GET , POST , PUT , DELETE, etc,

    # Request Headers : You can set custom request headers.

    # Response Handling : You can handle responses in various formats such as JSON , XML or plain text.

    # Cross-Origin Request : Allows you to make requests to a different domain, but you need to handle cross origin resource sharing (CORS) policies.


# Fetch API : 

    Fetch API provides a javascript interface for accessing and manipulating parts of the protocol, such as request and responses. It also provides a global fetch() method that provides an easy logical way to fetch resources asynchronously across the network. 


    Difference between Fetch API and XMLHttpRequest : 

        XMLHttPRequest is a callback-based API

        Fetch is promise based and provides better alternative that can be easily used in service workers. Fetch also integrates advances HTTP concepts such as CORS ( Cross Origin request ) .. 


        fetch method can accept a second parameter an object that allows you to control a number of different settings,

        no-cors only allows a limited set of headers in the request : 

         -  Accept
         - Accept Language 
         - Content Language
         - Content type with a value of application



        Read this page for more info : 

            https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


    

# Strict Mode in Javascript 

    Hard Term : 

        Strict mode is a way to enforce a stricter version of the language which can help to catch common coding errors and unsafe actions that could lead to bugs. 
        
        
        When a script or a function is in a strict mode , It operates under a restricted Set of rules that changes the behavior of the language in a few key ways : 

            - Elimination of silent errors : 
            
                     Strict mode throws exceptions for certain code patterns that javascript would normally ignore, such as assigning values to undeclared variables.

            - Disallowed Syntax : 
            
                    Certain syntax that might be problematics or unclear is disallowed in strict mode. For instance , `with` statement are not allowed.

            - Prohibits the use of `this` in global context : 
            
                    In a function , when in strict mode the value of `this` will be undefined rather than the global object `window` in a browser environment. 


            - No duplicate properties : 


                    in object literals, duplicate property names are not allowed, which helps avoid confusion and bugs

            
            - No octal literals : 

                    Strict mode disallows the use of octal literals example : var num = 010;

            - Argument object changes : 

                    Strict mode affects the behavior of the arguments object , making it separate from the function's parameters.
            
            - Reserved words : 


                    Certain words that might be reserved for future use are disallowed as variable names, parameter names, function names.


        Easy way : 

            Lets try this in another way , Imagine you have a big box of toy and wanna play with them nicely. " strict mode " is like a set of rules that helps you be careful with your toys. if you make  a mistake,  strict mode tells you so you can fix it.

            like , If you accidentally try to play with a toy, you don't have yet strict mode will give a warning and stop playing with that toy until you find it,

            It also stops from mixing up your toys in a way that could problems later,


            Strict mode is like a good helper that keeps on right path make sure all the code is safely and correctly.



        for more read this article in MDN web docs.




# Whaaaaaattttttt the heckkkk is (this) keyword?


    What is this? i mean keyword (this) :==>

        the (`this` keyword) refers to an object

    Which object depends on how `this` is being invoked (used or called)

    The keyword refers to different objects depending on how it is used : 

        ==> In an object method , this refers to the object
        ==> Alone , this refers to the global object
        ==> In a function , this refers to the global object. 
        ==> In a function and strict mode , this is undefined.
        ==> In an event  ,  this refers to the element that received tht event.
        ==> Methods like call() , apply() , and bind() can refer this to any object.

        Note : this is not a variable , you cannot change the value of this .



    Lets explore in in easy way : 

    - When in the home , `this` refers to you . Similarly when have a function inside and object , `this` refers to the object.

    - When in the School/ college/university , `this` refer to the class or other surroundings. In javascript. if u use a function (not an arrow function) outside of an object , `this` might be undefined (or a global object like `window`).

    - Visiting a friend , If you are at a friend's house , you are a visitor. If you use an arrow function , `this` doesn't change wherever you use it . It sticks to where it was created. So if you make an arrow function inside and object , this would stay the same as the object.


    - Someone calls you , When someone calls your name, you answer . In Javascript , If you attach an event listener to a buttone, for example `this` would be the button that was clicked .

    - You as the creator of something , If you build something , you can see the final creation you made . Similarly , if you use a constructor function or a class to create an object , `this` refers to the new object you just made ...

    `this` is like "who am I" depending on where you are in the code. Let me know if its help?




# Explicit Binding

    Related to `this` keyword;
    


    





