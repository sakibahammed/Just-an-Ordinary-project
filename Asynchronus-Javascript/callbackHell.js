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



asyncOperation1((result1)=>{
    asyncOperation2(result1 , (result2)=>{
        asyncOperation3(result2,(result3)=>{
            console.log('Final Result',result3);
        })
    })
})



