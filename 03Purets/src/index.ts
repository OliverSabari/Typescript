
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


//SHORTCUT FOR WRITING CLASS CONSTRUCTOR WHICH IS USED BY MANY PEOPLE

//The below code will generate that same as above user class

class User2 {
  
    readonly city : string = "chennai"
    constructor(
        public userid2:number , 
        public email2 : string
        ) 
        {
  
         }
}

//Getters and setters

class getandset {

    protected CourseCount = 1   //protected property can  be accessed within the class and also the class which inherits this class getandset
    constructor( public email : string , public userid : number) {

    }

    //private method can be initialised to the cllass as same as private property

    private deleteToken() : void {
        console.log("token deleted ")
    }

    get wiproEmail() : string {       //getter is same as javascript , just return type should be mentioned
        return `wipro${this.email}`
    }

    set CourseNumber ( coursenum : number){  //setters do not have function return type, it should not be declared
        this.CourseCount = coursenum
    }

}

class subUser extends getandset {

    changecourseCount () {
        this.CourseCount = 5   //COurse Count values can be changed because it is protected type , however still it cannot be accessed outside the class
    }
}