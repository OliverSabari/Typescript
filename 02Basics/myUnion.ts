
// Union types are used when we dont know what exact type is going to be passed in variable, it might be string or number or in arrays both number and string are possible

let score : number | string = 33

score = "33"

// score = false //this is not possible as score only allows number or string type

type user = {
    name : string;
    id : number;
}

type admin = {
    adminname : string ;
    id : number;
}

//As below our own union type can be used as user may be normal user and later he can be admin

let sabari : user | admin = {name : "sabari" , id : 3}

sabari = {adminname : "sabari", id :3}

// function x(id: number | string ){
//     console.log(id)
// }

// x(3)
// x("3")

// when function parameter has union type it is possible that wrong methods could be applied to wrong values as datatype is union, so here we need to do strong typechecking

function x(id : number | string){

    // id.toUpperCase()  this method is only for String, but if we didnot check the type before applying methods there is possibility that number could turn into string type

    if(typeof id === "string"){  //this is for string type
        id.toUpperCase()
    }
    else{                         //this is for number type
    return id.toFixed()
    }
}

//limiting the choices

type seatallotment = "aisle" | "middle" | "window"

let seats : seatallotment = "middle"

seats = "window"

// seats = "sdf"  //this is not possible as it is limited to only three values

export {}



