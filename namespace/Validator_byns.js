var Validation;
(function (Validation) {
    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
let strings_ns = ["hello", "98052", "123"];
let validators_ns = {};
validators_ns["ZIP code"] = new Validation.ZipCodeValidator();
validators_ns["Letters Only"] = new Validation.LettersOnlyValidator();
for (let s of strings_ns) {
    for (let name in validators_ns) {
        let isMatch = validators_ns[name].isAcceptable(s);
        console.log("-------------------------------------------------------------");
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} ${name}`);
    }
}
