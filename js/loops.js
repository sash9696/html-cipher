
//while and for loop

//while

// while(condition){ // syntax

// }
// let i = 0
// while( i < 5){
//     console.log(i)
//     i++
// }

// let i = 5

// while(i > 0){
//     console.log(i)
//     i--
// }

// let i = 5

// while(i){ //i != 0
//     console.log(i)
//     i--
// }

// let i = 3
// while (i) console.log(i--)


//do while

// do{
//     //code
// }while(condition)

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i < 5)


// let x = 0
// while( x < 5){
//     console.log(x)
//     x++
// }


// do{
//     console.log('hello world')
// }while(false)

// while(false){
//     console.log('hello world')
// }

//for loop

// for(begin; condition; step){ . //syntax

// }

// for (let i = 0; i < 5; i++){
//     console.log(i)
// }

//skipping the parts


// let i = 0

// for(; i < 5; i++){
//     console.log(i)
// }

// let i = 0

// for(; i < 10;){
//     console.log(i++)
// }


//break out of the loop

// let sum = 0

// while (true) {
//     let value = prompt("Enter a number", '')


//     sum = sum + value

//     break

// }
// alert('Sum: ' + sum)

let i = 0

while (i < 10) {
    if (i == 5) break
    console.log(i)
    i++
}