/**
 * Created by chaolinding on 2017/10/17.
 */

// 三斜线指令
/// <reference path = "Validation.ts" />

namespace Validation{
    let lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidation implements StringValidator{
        isAcceptable(s:string){
            return lettersRegexp.test(s);
        }
    }
}