import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Dezy', age: 25 });
console.log(docOne.age);
// let docTwo = addUID({})
var nameID;
(function (nameID) {
    nameID[nameID["Desmond"] = 0] = "Desmond";
    nameID[nameID["Randolf"] = 1] = "Randolf";
    nameID[nameID["Javis"] = 2] = "Javis";
    nameID[nameID["Brian"] = 3] = "Brian";
})(nameID || (nameID = {}));
const bigMe = {
    name: nameID.Brian,
    age: 25,
    data: [2, 45]
};
console.log(bigMe);
// Tuples 
let student = ['Dezy', 30];
student[0] = 'Brian';
console.log(student);
