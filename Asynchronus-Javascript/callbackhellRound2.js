function task1(callback){
    setTimeout(()=>{
        console.log('task1 complete');
        callback('result1')
    },1000)
}


function task2(result1,callback){
    setTimeout(()=>{
        console.log(`task 2 compelete with ${result1}`);
        callback('result2')
    },1000)
}

function task3(result2 , callback){
    setTimeout(()=>{
        console.log(`task 3 complete with : ${result2}`);
        callback('final result')
    },1000)
}



task1((result1)=>{
    task2(result1,(result2)=>{
        task3(result2,(finalresult)=>{
            console.log(`all complete with ${finalresult}`);
        })
    })
})