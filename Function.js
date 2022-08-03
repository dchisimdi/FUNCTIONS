// 2/raise 2
let twoRaiseto2 =Math.pow(2,2)
console.log(twoRaiseto2)
// 2 raise to 3
let twoRaiseto3 =Math.pow(2,3)
console.log('2 raise to the power of 3 is: ', twoRaiseto3)
// 6 raise to the power 6
let sixRaiseTopower2 =Math.pow(6,2)
console.log('6 raise to power of 2 is:',sixRaiseTopower2)
// function declaration or named function
function square() {
    console.log(2 ** 2)
}

for (let count =1; count <11; count++){

    // invoke
    square() 
}
//  square()
//  square() 
//  square() 
function printname() {
    console .log('simdi')
    //invoke
    
}
printname() 
function addition() {
    let number1 =2
    let number2 =4

    let addition =number1 + number2 

    let message ='2+4 is:'+addition
    console.log(message)
    //invoke

}
addition()
function subtraction() {
    let number1 =8
    let number2 =5
    let subtraction =number1 - number2
    let message ='8-5 is:'+subtraction
    console.log(message)
    //invoke
}

subtraction()
function multiply() {
    let number1 =10
    let number2 =5
    let multiply =number1*number2
    let message ='10times 5 is:'+multiply
    console.log(message)
    //invoke
}
multiply()
function division() {
    let number1 =80
    let number2 =4
    let divide =number1/number2
    let message ='80divide 4 is:'+divide
    console.log(message)
    return message
    //invoke
}
division()
function multiplication(a,b) {
    let product =a*b
    console.log(product)
    return product
}
//invoke

let m = multiplication(8,3)
console.log(m)


function addition( y,h){
    let plus= y-h
    console.log ( plus)
    return plus
}
// invoke
let a = addition( 7,m)
console .log( a)

function sub (d,c){
    let subtraction=d-c
    console.log(subtraction)
    return subtraction
}
let h=subtraction(a,2)
console.log(h)

