// create a object

let user = new Object(); // object constructor syntax

// or 

let user1 = {}; // object literal 

// Literals and properties 

let users = { 
    name : 'Jhons',
    age : 30
};
// setting a object 
users.isAdmin = true;

console.log(users);




// add another properties in the object;

users.nation = 'Bangladesh';

// delete a property from object

delete users.nation

console.log(users);


// multiword property names in an object


let person1 = {
    name : 'dove',
    'love bird' : true,
    'have feather' : true
}

let pera = {
    'Hello Mom' : 'Hello mom'

}

console.log(pera["Hello Mom"]);


// print out multi word property name,s 

console.log(person1['have feather']);

delete person1["have feather"]

console.log(person1);

let fruit = 'apple'

let bag = {
    [fruit + 'computer'] : 5
}

console.log(bag);


let obj = {
    o : 'test'
}

// in  

let myName = {
    name : 'sakib',
    age : 23
}
let age = "age"
console.log(age in myName);


// loop on object 

for(keys in myName){
    console.log(keys);
}

