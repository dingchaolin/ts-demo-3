var Validation;
(function (Validation) {
    let lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidation {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidation = LettersOnlyValidation;
})(Validation || (Validation = {}));
