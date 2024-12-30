// Stack
let myName = "Abdul Ahad"
let anotherName = myName
anotherName = "Muhammad Ubaid Raza"
console.log(myName)
console.log(anotherName)


//HEAP

let userOne = {
    name : "Abdul Ahad",
    email : "abdul@gmail.com"

}
let userTwo = userOne
userTwo.email= "ahad@gmail.com"// DONO KA CHANGE HOJAYE Q KE HEAP KE REFRENCE ORIGNAL ATA HAI ORIGNAL VALUE KE ANDAR HE UPDATE HOJA TA HAI YEA PHIR CHANGE HOJA TA HAI
console.log(userOne.email)
console.log(userTwo.email)
console.log(userOne)
console.log(userTwo)