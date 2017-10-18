/**
 * Created by chaolinding on 2017/10/18.
 */
/*
起别名
 */
type myString = string;
let str: myString = "123";


type callback = (name: string, age: number) => void;

type Container<T, U> = {name: T, age: U };

let stu: Container<string, number> = { name:"dcl", age:13};

console.log( stu )

/*
字面量形式
- 字面量形式可以用来区分重载
 */

type myFamily = "bother" | "mama" | "baba";

let myfamily: myFamily = "mama";//只能是上述3个值选一

