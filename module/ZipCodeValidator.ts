/**
 * Created by chaolinding on 2017/10/17.
 */
import {StringValidator} from "./Validation";
export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator{
    isAcceptable(s: string){
        return s.length === 5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator};
//导出语句重命名
export {ZipCodeValidator as mainValidator};