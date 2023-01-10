import {Invoice} from './clsasses/Invoice.js';
import { Payment } from './clsasses/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
//  docOne= new Invoice('Desmond', 'web work',200)
//  docTwo = new Payment('Teko', 'plumbing', 340)

//  let docs: HasFormatter[]=[];
//  docs.push(docOne);
//  docs.push(docTwo);

//  console.log(docs);



// const invOne = new Invoice('Desmond', 'work on the Desmond website', 250);
// const invTwo = new Invoice('Teko', 'work on the Teko website',400);

// let invoices:Invoice[]=[];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv=>
//     console.log(inv.client, inv.amount, inv.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs
const type =document.querySelector("#type") as HTMLSelectElement;
const tofrom =document.querySelector("#tofrom") as HTMLInputElement;
const details =document.querySelector("#details") as HTMLInputElement;
const amount =document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit',(e: Event)=>{
    let doc:HasFormatter;
    if(type.value==="invoice"){
        doc =new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc =new Invoice(tofrom.value, details.value, amount.valueAsNumber)

    }
    e.preventDefault();
console.log(doc)
})



