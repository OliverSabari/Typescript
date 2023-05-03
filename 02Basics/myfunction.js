"use strict";
//declaring type for parameter and deciding which type the function should return
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase()  This is not allowed since parameter type is number
    // return true        This is not allowed since function return type is number
    return num + 2;
}
// More number of parameters
function signUpUser(name, email, isPaid) { }
// declaring default values to parameter in case particular argument not passed while calling the function 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var resultOfAddition = addTwo(5);
signUpUser("sbaari", "sabari@gmail.com", true);
loginUser("sbaari", "sabari@gmail.com");
//function returns union type
// function valCalc ( num : number): boolean | string{   
//     if(num > 5){
//          return true
//         }
//     else {
//         return "200Ok"
//     }
// }
var heros = ["thor", "superman", "ironman"];
// const heros = [1,2,3]                            This is not allowed since hero expected to be string in below map function
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1                                     This is not allowed since return type is string
});
//We need to explicitly declare return type as void if function is not going to return anythin
function consolelog() {
    console.log("helo");
}
// Some functions never return a value
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.
function handleError(errmsg) {
    throw new Error(errmsg);
}
