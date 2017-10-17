/**
 * Created by chaolinding on 2017/10/17.
 */
import {StringValidator} from "./Validation";
/*
默认导出
 */
export default class ParseIntBasedZipCodeValidator implements StringValidator{
    isAcceptable(s: string ){
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

export { ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator"