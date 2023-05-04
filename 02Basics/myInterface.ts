

interface User {
    readonly dbid : string
    name : string,
    emailid: string,
    googleId? : String,
    // startTrial : () => string,              Another method to declare the function typeas below
    startTrail() : string,
    getNumber(couponname : string,value:number) : number
}

//We can reopen the interface and add new type but in type alias we cannot do that

interface User {
    githubtoken : string 
}

//using extend keyword we can now include all properties in user to admin whereas in type aliase we will extend using ampersand

interface Admin extends User {
    role : "admin" | "ta" | "learner"
}

let sabari : User ={
    dbid : "1",
    name : "sabari",
    emailid: "sab@gmail.com",
    githubtoken : "",
    startTrail : () => "Hello",
    getNumber : (sc:"sabari10",off:10) => 100      //Here the parameter name can be different than what we declare in interface
}

let user2 : Admin ={
    dbid : "1",
    name : "sabari",
    emailid: "sab@gmail.com",
    role: "admin",
    githubtoken : "",
    startTrail : () => "Hello",
    getNumber : (sc:"sabari10",off:10) => 100 
}

export {}