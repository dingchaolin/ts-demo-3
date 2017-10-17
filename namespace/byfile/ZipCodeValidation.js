var Validation;
(function (Validation) {
    let numberRegexp = /^[0-9]+$/;
    class ZipCodeValidation {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidation = ZipCodeValidation;
})(Validation || (Validation = {}));
