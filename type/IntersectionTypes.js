function extend(first, second) {
    let result = {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
class Human {
    constructor(name, age = 18) {
        this.name = name;
        this.age = age;
    }
}
class ConsoleLog {
    constructor() {
        this.date = new Date().toLocaleDateString();
    }
    log(...txts) {
        txts.forEach(item => console.log(item));
    }
}
let Jim = extend(new Human("dcl"), new ConsoleLog());
console.log(Jim.name, Jim.age, Jim.date);
