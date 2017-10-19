class Gird {
    Distance(point) {
        let xDist = point.x - Gird.origin.x;
        let yDist = point.y - Gird.origin.y;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }
}
Gird.origin = { x: 0, y: 0 };
let g = new Gird();
console.log(g.Distance({ x: 3, y: 4 }));
Gird.origin = { x: 6, y: 8 };
console.log(Gird.origin);
