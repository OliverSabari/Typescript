"use strict";
class User {
    constructor(userid, email) {
        this.city = "Jaipur"; //Just a default readonly value
        this.userid = userid,
            this.email = email;
    }
}
const sabari = new User(1, "sabari@gmail.com");
// sabari.email = "sab@gmail"  email cannot be accessed outside the class as is private
// sabari.city = "chennai"   this is not possible as city is readyonly
//SHORTCUT FOR WRITING CLASS CONSTRUCTOR WHICH IS USED BY MANY PEOPLE
//The below code will generate that same as above user class
class User2 {
    constructor(userid2, email2) {
        this.userid2 = userid2;
        this.email2 = email2;
        this.city = "chennai";
    }
}
//Getters and setters
class getandset {
    constructor(email, userid) {
        this.email = email;
        this.userid = userid;
        this.CourseCount = 1; //protected property can  be accessed within the class and also the class which inherits this class getandset
    }
    //private method can be initialised to the cllass as same as private property
    deleteToken() {
        console.log("token deleted ");
    }
    get wiproEmail() {
        return `wipro${this.email}`;
    }
    set CourseNumber(coursenum) {
        this.CourseCount = coursenum;
    }
}
class subUser extends getandset {
    changecourseCount() {
        this.CourseCount = 5; //COurse Count values can be changed because it is protected type , however still it cannot be accessed outside the class
    }
}
