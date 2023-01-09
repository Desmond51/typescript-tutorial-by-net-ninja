// const arr1 = [1,2,3,4];
// const arr2 = [8, 4, 5];
// const totalArr = arr1.every(isPosirive)

// function isPosirive(item){
//     return item >0
// }

// // console.log(totalArr);

// const objs =[ {name:"Desmond"}, 
// {name:"Randolf"},
// {name:"Brian"},
// {name:"Javis"}

// ]

// const checkName= objs.every(ojb=>obj.name !== undefined);

// console.log(checkName);

 const arr = [1,3,4,5,6,6]
  const arrFilter = arr.filter(isPositive)
 function isPositive(n){
    return n % 2 === 0;
 }
 console.log(arrFilter)
// const arr1=arr.fill(2)
// // console.log(arr1)

// function fillNumbers(n){
//     return Array(n).fill(0).map((_, indx)=> indx + 1)
// }

// console.log(fillNumbers(10))

const persons = [ 
    {
        name:"Desmond",
        age: 25
    }, 
{
    name:"Randolf",
    age:20
},
{
    name:"Brian",
    age:27
},
{
    name:"Javis",
    age:30
}

]

const bigAge= persons.filter(person => person.age >=27)

console.log(bigAge)