// set interval.js
let count = 0;
const momGreet = setInterval(()=>{
    console.log('hello MoM');
    count++;
    
    if(count ===10){
        console.log('ok you can sleep you are tired');
        clearInterval(momGreet)
    }
},2000)