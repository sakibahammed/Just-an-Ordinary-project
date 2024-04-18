//Recursion : 

//function stack 


const foo = function bar(){
    console.log('Hello Mom');
}


// 3 ways to call the function

// bar()
// argument.callee()
foo()



// recursion in function

let x = 0;

while(x<10){
    console.log(x++);
}


// Sometime looping is not enough we need to run function for special case. thats why we can use recursion


function walkTree(node){
    if(node===null){
        return;
    }
    for(let i=0;i<node.child ;i++){
        walkTree(node.childNodes[i]);
    }
}

//recursion itself use function stack.



function foo(i){
    if(i<0){
        return
    }
    console.log(`Begin : ${i}`);
    foo(i-1);
    console.log(`End : ${i}`);
}


foo(4)