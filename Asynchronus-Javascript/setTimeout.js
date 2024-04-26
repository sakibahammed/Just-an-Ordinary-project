// syntax of setTimeout:

/*

setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2,…,  paramN)

    
    
    
    */

console.log("start");
setTimeout(() => {
  console.log("delay of 5 second");
}, 5000);

console.log("end");



setTimeout(()=>{
    console.log('hello world');
},2000)
