// how the heck we should use strict js 

"use strict";


// strict mode in function


function helloMom(){
    "use strict"; // enable strict mode just placing "use strict at the top of script";




    console.log('hello mom');
}


helloMom()

// lets review some of the rules of strict mode with code example to check out : 


//=====> not using variables didn't created : 

// like this : 


// x = 5;

// Normally we can do this or use this but with Strict mode it ain't gonna work



// console.log(x);


// with 'use strict' we need to fix this thing like this , 

/*

    "use strict";

    let x = 5;

    console.log(x);


*/


//====> not  Using the wrong `this` ; 

console.log(this); // it will print 

/*
    in a function , `this` might mean different things. But with strict mode , if using outside a function, `this` will be undefined

*/




//===> not Using bad syntax : 

    /*
        If try to write code in a way that's not allowed , Strict mode will stop the code.. 
    
    
    */


    // with(obj){

    // }


// ===> Be careful with the  `argument` object: 

    function myNumber(a,b){
        console.log(arguments);

    }

    myNumber(1,2)

    /*
        In strict mode , the `argument` object doesn't update automatically if you change a variable in the function. 
    
    
    */

// No duplicate properties in an object : 

    // in an object each key should be unique. Without the strict mode, it can work but with strict mode it won't gonna work.

let person = {
    name:'sakib',
    age : 22,
    age : 11,
}
// multiple property wont gonna work here



//Be careful with function parameters : 

// In strict mode , cann't name a function parameter the same as another one . Without strict mode it will work but as there is strict mode it gonna work..


function myFunction(a,a){
    console.log(a,a);
}



//=====>>>. No octal literals : in normal case use of octal is allowed but in strict mode its not allowed 



// const myNumber = 010;


//===>>> Reserved words : 

    // certain words are reserved for future use in js. so dont think about it in strict mode .


    // let class = 5; // this will give you an error because class is a reserved word.





