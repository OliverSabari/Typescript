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
