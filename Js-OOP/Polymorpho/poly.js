class Animal{
    speak(){
        console.log('this animal makes a sound');
    }
}

class Dog extends Animal{
    speak(){
        console.log("The dog barks .");
    }
}

class Cat extends Animal{
    speak(){
        console.log('the cat mews');
    }
}

let animals = [new Animal() , new Dog() , new Cat()];
animals.forEach(animals => {
    animals.speak();
})