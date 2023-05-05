
//the main difference between abstract class and interface are
// It can be followed by extends keyword
// object cannot be instantiated for abstract class
// object can be created from subclass whichever extends the abstract class
// abstact method can be declard inside abstract class and it can be defined in sub class
// abstract class can also have some method feature and it can return some values by default. this method can be called by object of subclass


abstract class takePhoto {

    constructor (
        public Cameramode : string ,
        public filter : string,
        public burst : number 
    ) {

    }

    abstract getReels() : void 

    getReelsTime() : number {
        //some complex calculation
        return 3
    }

}

class Instagram extends takePhoto{

    constructor (
        public Cameramode : string ,
        public filter : string,
        public burst : number 
    ) {
            super(Cameramode,filter,burst)
    }

    getReels() :void {
        console.log("sample method ")

    }

}

const sab = new Instagram("s","s",3)

sab.getReelsTime()

export {}