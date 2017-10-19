class User {
    constructor(name, age) {
        this.age = 18;
        this.name = name;
        if (age) {
            this.age = age;
        }
    }
}
let u = new User("dcl", 34);
