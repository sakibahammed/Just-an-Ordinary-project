function func1(a,b,c){
    console.log(arguments[0]);// first argument
    console.log(arguments[1]);// second argument
    console.log(arguments[2]); // thirs argument
}



func1(1,3,4)


// arguments is an array like object accessible inside function that contains the values of the arguments passed to that function. 


// more simple way : argument is like the parameter of a function.



const longestString=()=>{
    let longestString = '';
    for(let i=0;i<arguments.length;i++){
        if(arguments[i].length>longestString){
            longestString = arguments[i];
        }
    }
    return longestString;
}

console.log(longestString('sakib' , 'tuku'));


