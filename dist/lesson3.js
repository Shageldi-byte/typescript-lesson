"use strict";
// casting
// generics
// common and es module
// DOM with TypeScript
// fetch with TypeScript
// let a: unknown = 'Hello';
// let price: unknown = 20.5;
// (<string>price).split('.');
let arr = [];
const some = (value, second) => {
    return [value, second];
};
let result = some('fds', 123);
console.log(result);
// {
//     "error": false,
//     "message":"Successfully",
//     "body": {
//         "id":1,
//         "token":"dfdsgdghfgjhkj"
//     }
// }
// {
//     "error": true,
//     "message":"Getting",
//     "body": [1,2,3]
// }
// interface Auth{
//     id: number;
//     token: string;
// }
// let login: GBody<Auth>={
// }
// let ids: GBody<number[]>;
// const makeFullname = (props: Props)=>{
//     return {
//         fullName: props.firstName+" "+props.lastName
//     }
// }
// const some2=<T>(param: T): T=>{
//     return param;
// }
// const makeFullname=<T extends Props> (obj: T)=>{
//     return(
//         {
//             ...obj,
//             fullname: obj.firstName+" "+obj.lastName
//         }
//     )
// }
// let person = makeFullname({
//     firstName: "Shageldi",
//     lastName: "Alyyew",
//     age: 22,
//     key: 'fgdf'
// });
// console.log(person);
