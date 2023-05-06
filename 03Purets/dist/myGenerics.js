"use strict";
const myarray = [];
// Generics has the template like we need to use angular brackets <Type> which will indicate ts that we are using generics
// Two ways of using functions without generic but this is not much used 
function identityOne(val) {
    return val; //Now here return value can be both number and boolean ,suppose if we need to add additional data types in future then this function wil be long and it is not usefull
}
function identityTwo(val) {
    return val; //Here this function can return any data type as it has any type which becomes difficult to predicrt this function output
}
//Now using generics function it becomes predictable and reusable
function identityThree(val) {
    return val;
}
identityThree(3); //We know that now this 3 data type will replace the "Type" in function and number type will be returned from the function 
identityThree("sabari"); //This will return string
//Shortcut to write the generics type
function identityFour(val) {
    return val;
}
identityFour({ brand: "sd", type: 3 }); //the same kind of object will be returned from function
