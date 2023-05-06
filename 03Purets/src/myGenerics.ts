
const myarray : Array<number> = []


// Generics has the template like we need to use angular brackets <Type> which will indicate ts that we are using generics

// Two ways of using functions without generic but this is not much used 

function identityOne(val : number | boolean) : number | boolean{
    return val    //Now here return value can be both number and boolean ,suppose if we need to add additional data types in future then this function wil be long and it is not usefull
}


function identityTwo(val : any) : any {
    return val    //Here this function can return any data type as it has any type which becomes difficult to predicrt this function output
}

//Now using generics function it becomes predictable and reusable

function identityThree<Type>(val:Type):Type{
    return val 
}

identityThree(3)  //We know that now this 3 data type will replace the "Type" in function and number type will be returned from the function 
identityThree("sabari")  //This will return string

//Shortcut to write the generics type

function identityFour<T>(val:T) : T {
    return val
}

//Suppose we need to pass the custom type using interface we need to call the function differently 

interface bottle{
    brand : string,
    type : number 

}


identityFour<bottle>({brand:"sd", type:3})  //the same kind of object will be returned from function

 
//generics in array and arrow function

function getSearchProducts<T>(product : T[]) : T {
    //do some operations
    const myIndex = 3
    // return 3    This will not work because the return type T is any one of the members inside array should be return
    return product[myIndex]
}

//below is the example of how to implement generics in arrow function

// <T,> indicates to JSX that it is not some html tag and it is typescript

const getProductsDetails = <T,>(product : T[]): T => {
    return product[3]
}