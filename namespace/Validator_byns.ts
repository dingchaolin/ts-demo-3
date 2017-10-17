/**
 * Created by chaolinding on 2017/10/17.
 */

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings_ns = ["hello", "98052", "123"];

let validators_ns : {[s:string] : Validation.StringValidator } = {};
validators_ns["ZIP code"] = new Validation.ZipCodeValidator();
validators_ns["Letters Only"] = new Validation.LettersOnlyValidator();

for( let s of strings_ns ){
    for( let name in validators_ns ){
        let isMatch = validators_ns[name].isAcceptable(s);
        console.log("-------------------------------------------------------------");
        console.log(`'${s}' ${isMatch ? "matches" : "does not match" } ${name}`)
    }
}


