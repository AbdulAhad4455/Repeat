let tinder = {}
tinder.name = "Abdul Ahad"
tinder.email = "@google.com"
tinder.isLoggedIn = false

console.log(tinder)

let regularUser = {email: "abdul@gmail.com",username : {
    fullname : {
        firstName : "Abdul",
        lastName : "Ahad"
    }
}}
//console.log(regularUser.username.fullname.firstName)

/*let obj1 = {1 : "a",
    2 : "b"
};
let obj2 = {3 : "a",
    4 : "b"
}
console.log(obj1)
//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3)
console.log(obj1)
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)
console.log(obj1)

const obj3 = {...obj1,...obj2}
console.log(obj3)
console.log(obj1)*/

/*console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))
console.log(tinder)
console.log(tinder.hasOwnProperty("email"))*/

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Abdul"
}
//console.log(coure.courseInstructor)
const {courseInstructor} = course
console.log(courseInstructor)
const { coursename : name} = course
console.log(name)