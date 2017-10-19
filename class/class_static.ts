/**
 * Created by chaolinding on 2017/10/19.
 */
// x** 表示x的平方
class Gird{
    static origin = {x:0, y:0};
    Distance(point:{x:number, y:number}){
        let xDist = point.x - Gird.origin.x;
        let yDist = point.y - Gird.origin.y;
        return Math.sqrt( xDist** 2 + yDist** 2);
    }
}

let g = new Gird();
console.log( g.Distance({x: 3, y: 4}));//5
Gird.origin = {x:6, y:8};

console.log( Gird.origin )