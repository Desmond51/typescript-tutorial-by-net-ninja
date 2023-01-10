import {Invoice} from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import {ListTemplate} from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;


// inputs
const type =document.querySelector("#type") as HTMLSelectElement;
const tofrom =document.querySelector("#tofrom") as HTMLInputElement;
const details =document.querySelector("#details") as HTMLInputElement;
const amount =document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value==="invoice"){
        doc =new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc =new Payment(tofrom.value, details.value, amount.valueAsNumber)

    }
    list.render(doc, type.value, 'end');
})

// Generics

const addUID  = <T extends {name:string}>(obj:T)=>{
let uid = Math.floor(Math.random() * 100);
return {...obj, uid};
}

let docOne = addUID({name:'Dezy', age:25});
console.log(docOne.age);
// let docTwo = addUID({})

enum nameID {'Desmond', 'Randolf', 'Javis', 'Brian'}
interface Resource<T>{
    name: nameID;
    age:number;
    data:T
}
const bigMe:Resource<number[]> = {
    name:nameID.Brian,
    age: 25,
    data: [2,45]
}

console.log(bigMe)