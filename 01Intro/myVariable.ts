
//string

let myName : string = "sabari"

let nameCaps = myName.toUpperCase()   //Only string methods can be performed since it is typed as string type

console.log(nameCaps)

//Number 

let myFavouriteNum : number  = 5.343 //Only number methods can be performed since it is typed as string type

myFavouriteNum.toFixed()

//But its more obvious that 5 is the number so typescript itself can inference the data type for us, so that we dont need to give data type for each and every places

let myNum = 5 //here i did not give type but however typescript infer this myNum as type number

//Boolean

let isPaid : boolean = true

//any

let heroes

function x() {
    return true
}

// Here heroes type becomes "any" type as function can return whatever it want , because heroes does not have type. Simply "any" type will turn off the typechecking
//Typescript advises to turn on the compiler flag noImplicitAny to any Implicit any as an error

heroes = x()

export{}