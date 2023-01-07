// const name1 = "Desmond";
// const moveOn = document.querySelectorAll('input')
// console.log(moveOn)
// moveOn.forEach(function(moveOn){
//     // console.log(moveOn)
// })

// const circ = (diameter:number)=>{
//     return diameter * Math.PI;
// }
// console.log(circ(6))
//arrays
// const arr = [2,3,5, 'first'];
// arr.push('4') 
// arr[0] = '8'
// console.log(arr)

// Objects
// let user ={
//     name:"Desmond",
//     age:25,
//     mood:"Happy"
// }
// user = {
//     name:"Boss",
//     age:23,
//     mood:"Sad"
    
//}
// console.log(user)
// let goods:boolean|object;
// let arr:(string|number|boolean)[]=[]
// let names:string

// names ="Desmond";
// arr= ['name', 'look', 3, false]
// arr.push('Move')
// arr.push(0)

// console.log(arr)
console.log("Hello guys")

let greet = function (a:number, b:number, c:number|string = 46){
    let d = a+b;
    console.log(d, c)
   
}
greet(2,5, '8')

const bigBoy = (y:number, f:number):string|number=>{
    return y*f
}
let goodEng = bigBoy(4,8);
goodEng = '49'
console.log(goodEng)