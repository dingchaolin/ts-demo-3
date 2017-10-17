"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allValidator_1 = require("./allValidator");
const exportConst_1 = require("./exportConst");
let test = new allValidator_1.ZipCodeValidator();
console.log(test.isAcceptable("12345"));
console.log(exportConst_1.default);
