
//type narrowing is used when there is multiple types and we need to narrow it down and write the cases for each type

function detectingType(val1: string | number) {
    if(typeof val1 === "string"){    //Using typeof we are handleing the data type string so other than that there is only one data type which is number, that can be handled outside if statement

       return val1.toUpperCase

    }
    return val1 * 3 

}


function provideId(id:number | null ){

    //Here we are handling data type null if the id is not present
    if(!id){
        console.log("please provide number")
        return 
    }
    return id * 3
}


function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {    //here we are handling array data type as typeof Array is object in js
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  //The "in" operator type narrowing 

  interface user {
    username :string,
    email : string 
  }

  interface admin {
    username : string,
    email : string , 
    isAdmin : boolean  
  }

  function isAdminAccount(val1 : user | admin ){
    if("isAdmin" in val1){    //This will check whether isAdmin property is in val1 
        return val1.isAdmin 
    }

  }

  //instanceOf

  //Using instanceOf we can  check whether that can be instantiated with new Keyword like below
  //new Date()
  //new Array[]

  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase())
    }
  }


  //TYpe Predicates

  type Fish = { swim () : void }

  type Bird = { fly () : void }


  function isFish ( val1 : Fish | Bird) : val1 is Fish {   // val1 is Fish will prevent this funcrtion from returning boolean , so instead boolean if it is true then it will return fish

    return (val1 as Fish).swim !== undefined    //typecastubg val1 as fish
  }

  function food ( val2 : Fish | Bird) {
    if(isFish(val2)){
        console.log("Fish")
    }
  }