/**
 * Created by chaolinding on 2017/10/19.
 */
/*
readonly 修饰的属性 只能在定义时 或者构造函数中进行初始化
 */
class User{
    readonly name: string;
    readonly age: number = 18;
    constructor( name: string, age?: number){
        this.name = name;
        if( age ){
            this.age = age;
        }

    }

}

let u = new User( "dcl", 34 );
// u.age = 12;//Error