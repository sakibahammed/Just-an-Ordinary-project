console.log('hello mom');

// what the heck is iterator any way?


let items = ['keyboard' , 'mouse' , 'speaker','loud machine noise'];

let dispenser = items[Symbol.iterator]();


console.log(dispenser.next());