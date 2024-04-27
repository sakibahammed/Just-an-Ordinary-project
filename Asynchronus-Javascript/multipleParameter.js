// well we can ask for multiple things and still we can get those in a promise 

const toyPromise = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('You get a toy');
    },1000);
});

const snackPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('You get a snack');
    },1000)
})



// use both , 


Promise.all([toyPromise , snackPromise])
    .then(([toyPromise,snackPromise])=>{
        console.log(toyPromise);
        console.log(snackPromise);
    })

    .catch((error)=>{
        console.log('some thing went wrong',error);
    })