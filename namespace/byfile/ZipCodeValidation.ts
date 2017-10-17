/**
 * Created by chaolinding on 2017/10/17.
 */

// 三斜线指令
/// <reference path = "Validation.ts" />

namespace Validation{
    let numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidation implements StringValidator{
        isAcceptable(s:string){
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}