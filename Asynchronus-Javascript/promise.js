const myPromise = new Promise((resolve,reject)=>{
    if(operationSuccess){
        resolve(result); // Full fill the promise.
    }
    else{ 
        reject(error); // Reject the promise with an error.
    }
    
})



