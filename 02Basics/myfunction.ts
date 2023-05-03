
//declaring type for parameter and deciding which type the function should return

function addTwo(num:number) : number {
    // num.toUpperCase()  This is not allowed since parameter type is number
    // return true        This is not allowed since function return type is number
        return num+2
}

// More number of parameters

function signUpUser (name :string, email:string,isPaid:boolean){}

// declaring default values to parameter in case particular argument not passed while calling the function 

let loginUser = (name :string, email:string,isPaid:boolean = false) => {

}


let resultOfAddition = addTwo(5)

signUpUser("sbaari" , "sabari@gmail.com",true)

loginUser("sbaari" , "sabari@gmail.com")

//function returns union type

// function valCalc ( num : number): boolean | string{   
//     if(num > 5){
//          return true
//         }
//     else {
//         return "200Ok"
//     }
// }

const heros = ["thor","superman","ironman"]

// const heros = [1,2,3]                            This is not allowed since hero expected to be string in below map function

heros.map((hero : string) : string => {
    return `hero is ${hero}`
    // return 1                                     This is not allowed since return type is string
})

//We need to explicitly declare return type as void if function is not going to return anythin

function consolelog() : void {
    console.log("helo")
}

// Some functions never return a value

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.

function handleError (errmsg: string):never{    
    throw new Error(errmsg)
}


export {}