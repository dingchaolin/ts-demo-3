/**
 * Created by chaolinding on 2017/10/17.
 */
import * as ZipCode from "./ParseIntBasedZipCodeValidator";
import * as VA from "./allValidator";
import {ZipCodeValidator as ZCV} from "./allValidator";
import ParseIntBasedZipCodeValidator from "./ParseIntBasedZipCodeValidator";
import num from "./exportConst"

let test = new ZCV();

console.log( test.isAcceptable( "12345") );

console.log( num )
