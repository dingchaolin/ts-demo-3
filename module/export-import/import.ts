/**
 * Created by chaolinding on 2017/10/18.
 */
/*
export = 导出的 必须使用import module = require("module");这种方式导入
 */
//import {Person} from "./export"; //这样不行
import Person = require("./export");
let p = new Person("dcl", 23);
console.log( p );