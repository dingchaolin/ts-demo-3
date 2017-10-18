class BasicCalculator {
    constructor() {
        this.value = 0;
    }
    get Value() {
        return this.value;
    }
    add(val) {
        this.value += val;
        return this;
    }
    mul(val) {
        this.value *= val;
        return this;
    }
}
let b = new BasicCalculator();
console.log(b.add(1).add(2).mul(3).Value);
