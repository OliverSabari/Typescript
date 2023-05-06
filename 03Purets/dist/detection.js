"use strict";
//type narrowing is used when there is multiple types and we need to narrow it down and write the cases for each type
function detectingType(val1) {
    if (typeof val1 === "string") { //Using typeof we are handleing the data type string so other than that there is only one data type which is number, that can be handled outside if statement
        return val1.toUpperCase;
    }
    return val1 * 3;
}
function provideId(id) {
    //Here we are handling data type null if the id is not present
    if (!id) {
        console.log("please provide number");
        return;
    }
    return id * 3;
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") { //here we are handling array data type as typeof Array is object in js
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(val1) {
    if ("isAdmin" in val1) { //This will check whether isAdmin property is in val1 
        return val1.isAdmin;
    }
}
