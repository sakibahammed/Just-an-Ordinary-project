// heh what the heck is event-loop ? 



console.log("start"); // this runs first 




setTimeout(()=>{// Asynchronous code : setTimeout schedules a function to run after 1 second
    console.log('timeout');
},1000) // This will run after 1 second


console.log('middle'); // This run immediately after the 'start'



setTimeout(()=>{
    // Asynchronous code: setTimeout schedules a function to run after 0 seconds

    console.log('quick Timeout'); // This will run after everything else is done
},0)



console.log("end"); // This runs last is the asynchronous code




/*
    how the heck was happening there , 

        ==> Stat : the code starts running and start got logged

        ==> First , `setTimeout` : the settimeout function schedules a task , (log timeout ) to run in 1 second.

        ==> Middle : the code continues and log middle right away.

        ==> second setTimeout : the setTimeout function schedules another task (log quicktimeout) to run after a delay of 0 second.

        ==> End : the code prints end because it finishes running the synchronous code.


        ==> Callback Queue : after all the synchronous code runs , the event loops checks the callback queue.

        ==> Running Callback : the event loop runs the callbacks from the queue. It first runs quick timeout (even its 0 milisecond) and then timeout after 1 second.


*/



// Check the code for output