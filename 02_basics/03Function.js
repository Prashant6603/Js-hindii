// function ATN(number1,number2){         
//     console.log(number1+number2)
// }

// ATN(1,6)

// how to take parameter and argument ,how to set defalut value


// Spread and Rest Operator

// function calculatecartprice (...num1){
//     return num1

// }
// console.log(calculatecartprice(100,300,442,556,89,8,9,))

// objects in function

// const user ={
//     username:"Prashant Bhoi",
//     id:"1234"
// }

// function usernew (anyobject){
//     console.log(`username is ${anyobject.username} and id is ${anyobject.id}`)
// }

// usernew(user)
// direct esmain object bana ke bhi bhej sakte hai

// const myarr=[200,366,45,256,522]

// function newfun(myarrP){
//     console.log(myarr[1])
// }

// newfun(myarr)


// ******************** SCOPE *******************

// Golbal and Local scope

// two types to declare a function

// 1st  => declare karne ke pehele use kar sakte hai
// function addnum(num1){
//     return num1+1
// }

// addnum(5)

// // 2nd => declare karne ke baad use kare

// const addmum = function(nums2){
//     return num2+2
// }

// addmum(6)



// ****************** arrow Function ********************

// const user ={
//     username:"Prashnat",
//     price:9999,

//     Welcomemessage:function(){
//         console.log(`${this.username} welcome to website `)
//     }

// }

// user.Welcomemessage()
// user.username="sam"
// user.Welcomemessage()

// const addtwo = (num1,num2) => num1 + num2
// agar object return karna hai to ()parenthesis lagana padega


// +++++++++++++++++++++ IIFE +++++++++++++++++++++
//  immediately Invoked Function Expressions 

//                      ()()

( function chai(){
    console.log("Prashnat");
})();

// js ko pata nhi hota ki kidher end karna hai ';' then use this 

( function aurcode(){
    console.log("Prashnat bhoi");
})();
// you can pass parameter here
( (name) => {
    console.log(`DB connected to ${name}`)
})("Prashnat")