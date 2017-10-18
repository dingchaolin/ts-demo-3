/**
 * Created by chaolinding on 2017/10/18.
 */
function pluck_JS( o, names){
    return names.map(n => o[n]);
}
//keyof T的结果为T上已知的公共属性名的联合 'name' | 'age'
function pluck_TS<T, K extends keyof T>(o: T, names: K[]): T[K][]{
    return names.map(n => o[n]);
}

interface HumanBeing{
    name: string;
    age: number;
}

let person: HumanBeing = {
    name:'dcl',
    age:23
};

console.log( pluck_TS( person, ['name','age']));

type ReadOnly<T> = {
    readonly [p in keyof T]: T[p];
};
type readOnlyPerson = ReadOnly<HumanBeing>;

let p :readOnlyPerson = {name:'ys', age:23};
// p.age = 67;//error

console.log( p );