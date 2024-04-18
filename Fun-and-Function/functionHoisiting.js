

console.log(square(4));


function square(n){
    return n * n;
}

// here the function is moved to the top of it scope by default like

// it only hoist the function not any value ;

console.log(square(5));

const square = function(n){
    return n*n;
}

