class Remote{
    constructor(){
        this.volume = 10; // Starting the volume level
    }

    increaseVolume(){
        this.volume++;
        console.log(`Volume is now ${this.volume}`);
    }
    decreaseVolume(){
        this.volume--;
        console.log(`Volume is now ${this.volume}`);
    }
}



let myRemote = new Remote();
myRemote.increaseVolume();
myRemote.increaseVolume();
myRemote.increaseVolume();
myRemote.decreaseVolume();