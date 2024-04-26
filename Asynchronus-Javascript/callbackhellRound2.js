function task1(callback) {
  setTimeout(() => {
    console.log("task1 complete");
    callback("result1");
  }, 1000);
}

function task2(result1, callback) {
  setTimeout(() => {
    console.log(`task 2 compelete with ${result1}`);
    callback("result2");
  }, 1000);
}

function task3(result2, callback) {
  setTimeout(() => {
    console.log(`task 3 complete with : ${result2}`);
    callback("final result");
  }, 1000);
}

task1((result1) => {
  task2(result1, (result2) => {
    task3(result2, (finalresult) => {
      console.log(`all complete with ${finalresult}`);
    });
  });
});



// how this code work
/*
task1 starts and takes 1 second to complete (setTimeout with a delay of 1000 ms).
When task1 completes, it calls its callback function with the result 'result1'.
In task1's callback, you start task2 using the result from task1.
task2 takes another second to complete, and when it finishes, it calls its callback function with the result 'result2'.
In task2's callback, you start task3 using the result from task2.
task3 takes another second to complete, and when it finishes, it calls its callback function with the final result.

*/
