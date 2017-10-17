let strings_ns_file = ["hello", "98052", "123"];
let validators_ns_file = {};
validators_ns_file["ZIP code"] = new Validation.ZipCodeValidation();
validators_ns_file["Letters Only"] = new Validation.LettersOnlyValidation();
for (let s of strings_ns_file) {
    for (let name in validators_ns_file) {
        let isMatch = validators_ns_file[name].isAcceptable(s);
        console.log("-------------------------------------------------------------");
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} ${name}`);
    }
}
