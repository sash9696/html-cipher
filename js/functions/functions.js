
//javascript is a synchronous , single threaded language
//it executes the code line by line 
//in a specific order top to bottom

// console.log('hello world')
// if(true){
//     console.log('inside if condition')
// }
// console.log('bye ')


//function declaration
// function greetings(salutation, name){

//     console.log('hello ' + salutation + " " +  name)
// }
// greetings('Mr','john')


//scope
//global , local scope

// let username = 'John' //inside the global scope

// //a function can access the variable from outer scope
// function printName(){ //function is also inside the global scope
//     let username = 'peter'
//     console.log(username)
// }
// printName()



//a function can access the variable from outer scope
// function printName(){ //function is also inside the global scope
//     let username = 'peter'

// }
// printName()
// console.log(username)

// //functions

// let a = 10
// x()
// function x() {
//     let a = 20
//     console.log(a)
// }


// //first javascript assigns memory to the variables as undefined and function


// let a = 10

// function x() {

//     return a
// }
// console.log(x())

//lexical scoping
// function x() {
//     let b = 100

//     function y() {

//         function z() {

//             console.log(b)
//         }
//         z()
//     }
//     y()
// }
// x()

function x() {

    let a = 10

    return function y() {
        console.log(a)
    }
}

let z = x()
z()

