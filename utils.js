"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyName = void 0;
class Utils {
    constructor(fname) {
        this.fname = fname;
    }
    get Fname() { return this.fname; }
    set Fname(val) { this.fname = val; }
    static convertStringToDate(value) {
        let lname = this.lname;
        let converted = new Date(value);
        return {
            lname,
            converted
        };
    }
}
exports.default = Utils;
Utils.lname = 'First';
Utils.turkmenReplacer = (str) => {
    let result = '';
    let tm = ['ä', 'ň', 'ö', 'ş', 'ü', 'ç', 'ý', 'ž'];
    let en = ['a', 'n', 'o', 's', 'u', 'c', 'y', 'z'];
    Array.from(str).forEach(item => {
        if (tm.indexOf(item.toString().toLowerCase()) != -1) {
            if (item != item.toString().toLowerCase()) {
                result += en[tm.indexOf(item.toString().toLowerCase())].toUpperCase();
            }
            else {
                result += en[tm.indexOf(item.toString().toLowerCase())];
            }
        }
        else {
            result += item;
        }
    });
    return result;
};
exports.MyName = "Shageldi";
