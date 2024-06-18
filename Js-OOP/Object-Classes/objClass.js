class Cake {
    constructor(flavor , size){
        this.flavor = flavor;
        this.size = size;
    }

    describeAboutCake(){
        return `Hey my cake taste good its flavour is ${this.flavor} and its weight is ${this.size}`;
    }
}


let cake = new Cake('strawberry' , '1-pound');
console.log(cake.describeAboutCake());