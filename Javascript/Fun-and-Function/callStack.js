function functionA(){
    console.log('function A start');
    functionB();
    console.log('function A end');
}
function functionB(){
    console.log('Function B start');
    functionC();
    console.log('Function B end');
}

function functionC(){
    console.log('function c run');
}


// function a called

functionA()


/*
    how the heck call stack function works : 
        
        here functionA calls function B
        Function B call function C
        function c don't call anyone so it finish running.   
        than it goes back to function B than C than A
        thats how call stack helps Javascript keep track of which function to run and in what order.

 */