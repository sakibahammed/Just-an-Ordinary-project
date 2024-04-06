// Global Scope : 

let globalVaribale = 10;

function foo(){
    console.log(globalVaribale);
}
foo()

console.log(globalVaribale);



// Function Scope : 

function fooo(){
    let functionVariable = 100;
    console.log(functionVariable);
}

fooo()

console.log(functionVariable); 
// here functionVaribale is not avaiable due to function scope. 

if(true){
    let blockvar = 30;

    console.log(blockvar);
}


console.log(blockvar);

//Block scope 



//Lexical scope 

function outerFunction(){
    let outerVar = 'I am outer';

    function innerFunction(){
        console.log(outerVar);
    }

    innerFunction()
}

outerFunction()

