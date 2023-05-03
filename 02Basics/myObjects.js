"use strict";
// declaring type to object properties in function params
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "sabari", isPaid: true, email: "sabari@gmail.com" };
createUser(newUser); //It allows us to pass the extra arguments but however functionn accepts only two parameters 
// If function return the object type
function createCourse() {
    return { name: "react js", price: 399 };
}
