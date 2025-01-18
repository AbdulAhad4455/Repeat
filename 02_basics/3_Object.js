let mySym = Symbol("key1")

let jsUser = {
    name : "Abdul Ahad",
    [mySym] :"myKey1",
    email : "ahadansari790@gmail.com",
    age : 21,
    location : "Tando Adam",
    "favorite color" : "Green"

}

console.log(jsUser.name)
console.log(jsUser["favorite color"])
console.log(jsUser[mySym])
//Object.freeze(jsUser)
jsUser.age = 22
//Object.freeze(jsUser)



console.log(jsUser)


jsUser.greeting = function () {
    console.log("hello world")
}
console.log(jsUser.greeting())

 /*jsUser.greeting2 = function (){
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greeting2())*/