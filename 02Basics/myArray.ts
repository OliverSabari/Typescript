

const heros : string[] = []      //THis is array of strings

heros.push("spiderman")

// const favNumbers : number[] = []   //array of numbers

//another way to declare it is,

const favNumbers : Array<number> = []

favNumbers.push(3)

//For Array of objects

type user = {
    name : string;
    isActive : boolean;
}

//like number and string types we can use our own type as below

const allUsers : user[] = []

allUsers.push({name : "" , isActive : false})

//for array of arrays

let MMmodels : number[][] = [
    [255,255,255],
    [12,3,4,5]
]

export {}