
// declaring type to object properties in function params

function createUser({name : string, isPaid : boolean}){

}

let newUser = { name : "sabari" , isPaid : true , email : "sabari@gmail.com"}

createUser(newUser)   //It allows us to pass the extra arguments but however functionn accepts only two parameters 

// If function return the object type

function createCourse ( ) : {name : string , price : number} {
    return {name: "react js" , price : 399}
}

export {}