function sum(...numbers){ //these three dots make every parameter or argument in an array.
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }

    return sum;
}

console.log(sum(1,2,3,4,5)); // multiple argument but they will all be in an array