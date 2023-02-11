"use strict";
// // interface
// interface IPerson{
//     name: string;// not initialized, but no error
//     dob: Date;
//     getAge(): number;
// }
// class Person {
//     name: string='gdhg';
//     dob: Date;
//     constructor(name: string, dob: Date){
//         this.name = name;
//         this.dob = dob;
//     }
//     getAge(): number{
//         // do something
//         return 0;
//     }
// }
// let myPerson: IPerson = {
//     name: 'Shageldi',
//     dob: new Date('2000-01-01'),
//     getAge() {
//         return new Date().getFullYear()-this.dob.getFullYear();
//     }
// }
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["ACCEPTED"] = "ACCEPTED";
    OrderStatus["PROCCESSING"] = "PROCCESSING";
    OrderStatus["ON_THE_WAY"] = "ONTHEWAY";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["REJECTED"] = "REJECTED"; // addmin tarapyndan
})(OrderStatus || (OrderStatus = {}));
let products;
let currentLanguage = 'ru';
// products.forEach((product) => {
//    let name = product.name[currentLanguage];
// })
