"use strict";
//Interface in class are like blueprint where if the class implements interface then it must follow the rules and it cannot escape from that
class instagram {
    //Here since instagram implements interface , it should have all the property as in takephoto
    constructor(Cameramode, filter, burst) {
        this.Cameramode = Cameramode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youtube {
    constructor(Cameramode, filter, burst) {
        this.Cameramode = Cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    //Now it shouldd also have reels method
    reels() {
        console.log("reels video");
    }
}
