/**
 * Created by chaolinding on 2017/10/17.
 */
// 三斜线指令
/// <reference path = "Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidation = /** @class */ (function () {
        function ZipCodeValidation() {
        }
        ZipCodeValidation.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidation;
    }());
    Validation.ZipCodeValidation = ZipCodeValidation;
})(Validation || (Validation = {}));
/**
 * Created by chaolinding on 2017/10/17.
 */
// 三斜线指令
/// <reference path = "Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidation = /** @class */ (function () {
        function LettersOnlyValidation() {
        }
        LettersOnlyValidation.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidation;
    }());
    Validation.LettersOnlyValidation = LettersOnlyValidation;
})(Validation || (Validation = {}));
/**
 * Created by chaolinding on 2017/10/17.
 */
/// <reference path = "Validation.ts" />
/// <reference path = "LettersOnlyValidation.ts" />
/// <reference path = "ZipCodeValidation.ts" />
var strings_ns_file = ["hello", "98052", "123"];
var validators_ns_file = {};
validators_ns_file["ZIP code"] = new Validation.ZipCodeValidation();
validators_ns_file["Letters Only"] = new Validation.LettersOnlyValidation();
for (var _i = 0, strings_ns_file_1 = strings_ns_file; _i < strings_ns_file_1.length; _i++) {
    var s = strings_ns_file_1[_i];
    for (var name_1 in validators_ns_file) {
        var isMatch = validators_ns_file[name_1].isAcceptable(s);
        console.log("-------------------------------------------------------------");
        console.log("'" + s + "' " + (isMatch ? "matches" : "does not match") + " " + name_1);
    }
}
