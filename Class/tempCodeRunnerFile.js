

class User{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

let sakib = new User('sakib ahammed');

sakib.sayHi()