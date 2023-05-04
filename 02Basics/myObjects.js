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
//here we have created own type using type alias which we can use it on function param type and return type as below
//this will make easy to handle the object across multiple function
function userDetails(user) {
    return { name: '', email: '', isLoggedIn: true };
}
userDetails({ name: '', email: '', isLoggedIn: true });
var user = {
    _id: "123",
    name: "sabari",
    emailid: "sabari.gmail.com" // Here creditCard property is not present but since it is optional typescript will not throw error
};
