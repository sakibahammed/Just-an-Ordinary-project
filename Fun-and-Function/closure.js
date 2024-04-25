function outerFunction(){
    let outerVariable = 'hello from outside';
    // console.log(outerVariable);

    function innerFunction(){
        console.log(outerVariable);  // Accessing outerVariable from outerFunction
    }
    return innerFunction; // Return the inner function

}


let myClosure = outerFunction(); // Call outerFunction and get innerFunction
console.log(myClosure);


/*

In the code, outerFunction has a variable called outerVariable.
Inside outerFunction, there is another function called innerFunction.
The innerFunction can use the outerVariable even after outerFunction is done running.
When you call outerFunction, it returns the innerFunction and keeps it in myClosure.
Then, when you call myClosure, it runs innerFunction, and you still see the outerVariable from outerFunction.


*/