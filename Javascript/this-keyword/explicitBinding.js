//call() method 


const person = {
    name : 'sakib',
    id:23
};


function sayHello(greeting){
    console.log(`${greeting} , my name is ${this.name}`);
}


sayHello.call(person,'hi');




//apply() method

function greet(greeting){
    console.log(`${greeting} , my id is ${this.id}`);
}

greet.apply(person,['hello']);


// bind()

function greeting(greeting){
    console.log(`${greeting} , my name is ${this.name}`);

}

const greetSakib = greeting.bind(person);

greetSakib('hello');