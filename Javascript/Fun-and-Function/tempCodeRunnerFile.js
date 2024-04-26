function foo(i){
    if(i<0){
        return
    }
    console.log(`Begin : ${i}`);
    foo(i-1);
    console.log(`End : ${i}`);
}


foo(4)