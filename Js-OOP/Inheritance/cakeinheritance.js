class PlainCake {
    constructor(flavour , size){
        this.flavour = flavour;
        this.size = size;
    }
    cake(){
        return `yummy cake ${this.flavour} with a ${this.size} size cake`
    }
}


class BirthdayCake extends PlainCake{
    constructor(cream , candel , ingredients , flavour , size){
        super(flavour , size);
        this.cream = cream;
        this.candel = candel; 
        this.ingredients = ingredients;
    }

    preparedCake(){
        return `my cake is very tasty not a plain cake but my cake is ${this.flavour} flavoured ${this.cream} decorated and has ${this.ingredients} also i place a ${this.candel} with ${this.size} sized`;
    }
}




let happyBirthdayCake = new BirthdayCake('lemon' , 'sour' , 'blue candel' , 'butter and lemon' , '1 pound');
console.log(happyBirthdayCake.preparedCake());


