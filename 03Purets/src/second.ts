
//Interface in class are like blueprint where if the class implements interface then it must follow the rules and it cannot escape from that

interface takePhoto {
    Cameramode :string ,
    filter : string,
    burst : number
}

interface takeVideo {
    reels : () => void 
}

class instagram implements takePhoto {

    //Here since instagram implements interface , it should have all the property as in takephoto

    constructor (
        public Cameramode : string ,
        public filter : string,
        public burst : number 
    ) {

    }
}

class youtube implements takePhoto,takeVideo{
    constructor (
        public Cameramode : string ,
        public filter : string,
        public burst : number 
    ) {

    }
    //Now it shouldd also have reels method

    reels() : void {
        console.log("reels video")
    }
}