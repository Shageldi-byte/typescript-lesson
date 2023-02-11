// export default class Utils {
//     static lname: string='First';

//     constructor(private fname: string){}
//     get Fname(): string { return this.fname}
//     set Fname(val: string) { this.fname = val}

//     static turkmenReplacer = (str: string) => {
//         let result:string = '';
//         let tm = ['ä', 'ň', 'ö', 'ş', 'ü', 'ç', 'ý', 'ž'];
//         let en = ['a', 'n', 'o', 's', 'u', 'c', 'y', 'z'];
//         Array.from(str).forEach(item => {
//         if (tm.indexOf(item.toString().toLowerCase()) != -1) {
//             if (item != item.toString().toLowerCase()) {
//             result += en[tm.indexOf(item.toString().toLowerCase())].toUpperCase()
//             } else {
//             result += en[tm.indexOf(item.toString().toLowerCase())]
//             }
//         } else {
//             result += item;
//             }
//         })
//         return result;
//     }

//     static convertStringToDate(value: string) {
//         let lname=this.lname;
//         let converted=new Date(value)
//         return {
//             lname,
//             converted
//         };
//     }  
// }

// export const MyName="Shageldi";