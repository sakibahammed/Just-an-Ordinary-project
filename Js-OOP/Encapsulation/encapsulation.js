class TreasureChest{
    constructor(){
        this._treasure = [];
    }

    addTreasure(treasure){
        this._treasure.push(treasure);
    }
    listTreasure(){
        return this._treasure;
    }
}

let myChest = new TreasureChest();
myChest.addTreasure('money');
myChest.addTreasure('diamond');


console.log(myChest._treasure);