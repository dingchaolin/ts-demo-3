/**
 * Created by chaolinding on 2017/10/17.
 */

interface StringValidator{
    isAcceptable(s:string):boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator{
    isAcceptable( s:string ){
        return lettersRegexp.test( s );
    }
}

class ZipCodeValidator implements StringValidator{
    isAcceptable( s:string ){
        return s.length === 5 && numberRegexp.test( s );
    }
}

let strings = ["hello", "98052", "123"];

let validators : {[s:string] : StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters Only"] = new LettersOnlyValidator();

for( let s of strings ){
    for( let name in validators ){
        let isMatch = validators[name].isAcceptable(s);
        console.log("-------------------------------------------------------------");
        console.log(`'${s}' ${isMatch ? "matches" : "does not match" } ${name}`)
    }
}


