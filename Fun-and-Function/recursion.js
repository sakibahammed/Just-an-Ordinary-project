function countdown(n){
    if(n<0){
        return; // stop the function segment
    }
    console.log(n);;
    countdown(n-1); // recursive call
}


countdown(10)