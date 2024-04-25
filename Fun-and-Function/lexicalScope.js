let globalVar = 'I am from Global world'

function outerfunction(){
    let outerVar = 'I am from outer function';

    function innnerFunction(){
        console.log(outerVar);
        console.log(globalVar);
    }
    innnerFunction()
}

outerfunction()

/*
-outerFunction is defined with a variable outerVariable.
Inside outerFunction, another function called innerFunction is defined.

-innerFunction can access outerVariable because it is inside the scope of outerFunction.

-When outerFunction is called, it runs innerFunction.
innerFunction is able to print outerVariable.

*/