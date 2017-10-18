/**
 * Created by chaolinding on 2017/10/18.
 */
class BasicCalculator{
    protected value: number = 0;
    constructor(){

    }

    get Value(): number{
        return  this.value;
    }

    add(val: number): this{
        this.value += val;
        return this;
    }

    mul( val: number): this{
        this.value *= val;
        return this;
    }
}

let b = new BasicCalculator();
console.log( b.add(1).add(2).mul(3).Value );
