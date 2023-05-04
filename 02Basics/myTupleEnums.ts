

//tuples are used when you need an array to be in very precise order

let tUser : [number , string ] = [1,"sabari"]

//below is not allowed as 0th position should be number and 1st position should be string

// tUser[0] = "sdf"  

let rbg : [number , number ,number ] = [255,123,111]

type User = [number , string ]

const newuser : User = [1,"sabari"]

newuser[1] = "sdf" 

newuser.push(2,"sedf")

export  {}