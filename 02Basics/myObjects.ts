
// declaring type to object properties in function params

function createUser({name : string, isPaid : boolean}){

}

let newUser = { name : "sabari" , isPaid : true , email : "sabari@gmail.com"}

createUser(newUser)   //It allows us to pass the extra arguments but however functionn accepts only two parameters 

// If function return the object type

function createCourse ( ) : {name : string , price : number} {
    return {name: "react js" , price : 399}
}

//Suppose we have object properties which are going to be used across multiple functions and we expect to have all the properties in function then we can use type alias

type UserDetails = {
    name : string ;
    email: string ;
    isLoggedIn : boolean;
}

//here we have created own type using type alias which we can use it on function param type and return type as below

//this will make easy to handle the object across multiple function

function userDetails (user : UserDetails) : UserDetails{

   return {name:'',email:'',isLoggedIn:true}
    
}

userDetails({name:'',email:'',isLoggedIn:true})

//readonly , optional and intersection of types

type user = {
    readonly _id :string;
    name : string;
    emailid : string;
    creditCard? : number ;
}

let user : user = {
    _id:"123",
    name :"sabari",
    emailid:"sabari.gmail.com"  // Here creditCard property is not present but since it is optional typescript will not throw error
}

// user._id = "323"  This is not possible as id is readonly property

type cardnumber = {
    cardnumber : number
}

type cardexpirydate = {
    date : number 
}

//combining above two types to carddetails types using ampersand symbol

type carddetails = cardnumber & cardexpirydate & {
    cvv : number
}


export {}