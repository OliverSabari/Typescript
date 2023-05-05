
class User {
    //Below should be declared in order to assign the values in constructor using "this"
   
    public userid : number    //public keyword is by default for every property, it can be accessed everywhere
    
    private email : string     //Private property cannot be accessed outside the class

    readonly city : string = "Jaipur"  //Just a default readonly value

    constructor(userid:number , email : string) {
        this.userid = userid,
        this.email = email
    }
}


const sabari = new User(1,"sabari@gmail.com")

// sabari.email = "sab@gmail"  email cannot be accessed outside the class as is private

// sabari.city = "chennai"   this is not possible as city is readyonly