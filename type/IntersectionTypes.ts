/**
 * Created by chaolinding on 2017/10/18.
 */
function extend<T, U>( first: T, second: U): T & U {
    let result = <T & U>{};

    for(let id in first){
        (<any>result)[id] = (<any>first)[id];
    }

    for(let id in second){
        if(!result.hasOwnProperty(id)){
            (<any>result)[id] = (<any>second)[id];
        }
    }

    return result;
}

class Human{

    name: string;
    age: number;
    constructor(name: string, age: number = 18){
        this.name = name;
        this.age = age;
    }

}

interface Loggable{
    date: string;
    log(txt: string ):void;
}

class ConsoleLog implements Loggable{
    date: string;
    constructor(){
        this.date = new Date().toLocaleDateString();
    }
    log(...txts: any[]){
        txts.forEach( item => console.log(item) );

    }
}

let Jim = extend( new Human("dcl"), new ConsoleLog() );
console.log( Jim.name, Jim.age, Jim.date )
