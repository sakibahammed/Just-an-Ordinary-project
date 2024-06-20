// Allocation in Javascript

/*
    In order to not bother fellow programmer with allocation , JS will automatically allocate memory when  values are initially declared. 

*/

// Value initialization 

const n  = 123; // allocates  memory for a number

const s = "azerty" ; // allocates memory for a string . 

const o = {
    a : 1,
    b : null
} // allocates memory for an object and contained values . 

// (like object) allocates  memory for the array and contained values . 

const  a = [1, null , 'abra'];

function f(a){
    return a+1;
} // allocate a function which is a callabale object

// function expression also allocate an object

SVGGeometryElement.addEventListener(
    'click',()=>{
        SVGGeometryElement.style.background = 'blue';
    },
    false,
);


//hello world