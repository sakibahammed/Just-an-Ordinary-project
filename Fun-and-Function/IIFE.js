// example of IIFE  : 

    (function(){
        console.log('Hello MOM');
    })();// here () by default call it self immediately as soon as the function is declared. 
    // () adding this thing in the function by default call the function and this thing make a function IIFE. 

    // arrow IIFE 

    (()=>{
        console.log('hello world');
    })();

    // async one 

    (async ()=>{
        console.log('hello mom');
    })();