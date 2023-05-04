

interface User {
    readonly dbid : string
    name : string,
    emailid: string,
    googleId? : String,
    // startTrial : () => string,              Another method to declare the function typeas below
    startTrail() : string,
    getNumber(couponname : string,value:number) : number
}


let sabari : User ={
    dbid : "1",
    name : "sabari",
    emailid: "sab@gmail.com",
    startTrail : () => "Hello",
    getNumber : (sc:"sabari10",off:10) => 100      //Here the parameter name can be different than what we declare in interface
}

export {}