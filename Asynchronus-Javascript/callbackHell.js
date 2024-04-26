// How the callback hell looks like


function asyncOperation1(callback){
    setTimeout(()=>{
        callback('result1')
    },1000)
}


function asyncOperation2(result1 , callback){
    setTimeout(()=>{
        callback('result2')
    },1000)
}

function asyncOperation3(result2,callback){
    setTimeout(()=>{
        callback('result3')
    },1000)
}




// same thing without a hell 


// using promise :


function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('result1');
        }, 1000);
    });
}

function asyncOperation2(result1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('result2');
        }, 1000);
    });
}

function asyncOperation3(result2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('result3');
        }, 1000);
    });
}

asyncOperation1()
    .then(result1 => asyncOperation2(result1))
    .then(result2 => asyncOperation3(result2))
    .then(result3 => console.log('Final result:', result3))
    .catch(err => console.error('Error:', err));





asyncOperation1((result1)=>{
    asyncOperation2(result1 , (result2)=>{
        asyncOperation3(result2,(result3)=>{
            console.log('Final Result',result3);
        })
    })
})



// async and await : 

async function performOperations() {
    try {
        const result1 = await asyncOperation1();
        const result2 = await asyncOperation2(result1);
        const result3 = await asyncOperation3(result2);
        console.log('Final result:', result3);
    } catch (err) {
        console.error('Error:', err);
    }
}

performOperations();
