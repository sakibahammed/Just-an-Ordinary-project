function countdown(n){
    if(n<0){
        return; // stop the function segment
    }
    console.log(n);;
    countdown(n-1); // recursive call
}


countdown(10)


// recursive roast 

function roastGiven(n){
    if(n<0){
        return;

    }
    console.log('roast give :',n);
    roastGiven(n-1);
}