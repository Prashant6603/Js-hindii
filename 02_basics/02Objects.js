// Singletone

// Object literals

// const mysym = Symbol("key1")
// const Jsuser={
//     name:"Prashant",
//     [mysym]:"God is great",
//     age:22,
//     location:"Mumbai",
//     email:"prashnat@gmail.com",
//     isloggedIn:false,
//     Lastloggedin:["Monday","Saturday"]
// }


// console.log(Jsuser["name"])
// console.log(Jsuser.name)
// console.log(typeof mysym)

// Jsuser.email="kalwa@gmail.com"
// console.log(Jsuser.email)

// If you want  to freeze the object thenn use
// Object.freeze(Jsuser)
// Then after you can not change anything in the object or update any value

// Jsuser.greeting = function (){
//     console.log("Hello Prashant")
// }

// console.log(Jsuser.greeting());
// Jsuser.greeting()

// Jsuser.greetingtwo = function (){
//     console.log(`Hello Boys ${this.email}`)
// }

// Jsuser.greetingtwo()

// ***************** Part Two ****************

// singletone object =>   const tinderUser = new Object()
// non singletone object =>
 const tinderUser ={}
tinderUser.id="1234"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;
// console.log(tinderUser)

const regularuser ={
    email: "Prash@gmail.com",
    fullname :{
        userfullname:{
            firstname:"Prashnat",
            lastname:"Rajpal",
        }

    }
}
// console.log(regularuser.fullname.userfullname.firstname)
const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
// // const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3={...obj1,...obj2}
// console.log(obj3)

// jab database se value aati hai
// tooo array main bhohat objects aate hai

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// if keys does not exitvthen it will be crash
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Destucturing Object

const course={
    coursename:"Jhindi",
    courseprice:"1200",
    courseinstructor:"babubhai"
}

const{courseinstructor:instructorr} =course
console.log(instructorr)


// API JSON

