// the heck is promise in promise section : 


// first create a promise 

const toyPromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        //resolve the promise and give the toy.
        resolve("here's your toy!");
    },2000);
})


// using the promise , 

toyPromise
    .then((message)=>{
        // it will run when the toy recevd.
        console.log(message);
    })
    .catch((error)=>{
        // this run if something is wrong.
        console.log(error);
    })