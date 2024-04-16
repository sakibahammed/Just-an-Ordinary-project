// bit wise operator and usage


//AND (&) operator :

console.log(5 & 3);

console.log(5 & 0);


/*
        Binary breakdown of bit wise AND operator :
         
        5 = 101
        3 = 011

        == 001 = 1

    
        This operator performs a bitwise AND operation on two numbers. It compares each bit of the two numbers and produces a result where the corresponding bits are set to 1 if and only if both bits are 1.

        like AND operation .  1+1 = 1 , 1 + 0 = 0 , 0+0 = 0



*/

// OR operator : 

    console.log(5|3);

    // Binary breakdown is same like  Bitwise OR operator 

    /* 

    like 1+1 = 1 , 1+0 = 1 , 0+1 = 1, 0+0 = 0
    
        5 = 101 , 3 = 011 = 111 = 7
     */



// XOR (^)


    /*
    
        This operator perform a bitwise exclusive OR operation on two number. It compares each bit of the two numbers and produces a result where corresponding bits are set to 1 if they are different. 


    */


    console.log(5 ^ 3);