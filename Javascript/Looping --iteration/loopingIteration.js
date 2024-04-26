const age = [1,3,4,5,10,23];
// for loop
for(let i =0;i<age.length;i++){
    console.log(age[i]);
}

// while loop

let i=0;

while(i<age.length){
    console.log(age[i]);
    i++;
}

// do while


do{
    console.log(age[i]);
    i++
}
while(i<age.length)



// looping on object : for-in


const person = {
    age :12,
    name : 21
}

for(keys in person){
    console.log(keys); 

    console.log(`${keys} : ${person[keys]}`);
}

// looping on array using for of

let friends = [];
for(friend of friends){
    console.log(friend);
}


// breaks and continue : 

    const simpleNumbers = [1,2,4,5,8,9,100,34,72,61,55];

    console.log(simpleNumbers);

    for(number of simpleNumbers){
        console.log(number);
        if(number===9){
            break; // break : knows brake the loop
            
        }

    }

    for(let i =0;i<10;i++){
        if(i===4){
            continue;
        }
        console.log(i); // continue jumps 
    }



    // labeled Statements : 


    outerLoop: for(let i=0;i<3;i++){
        innerLoop: for(let j=0;j<3;j++){
            // break outerLoop; // this brake both outer loop not only inner loop,;
            break innerLoop;
        }

        console.log(i);
    }


