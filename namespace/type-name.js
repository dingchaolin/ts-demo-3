var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        class Triangle {
        }
        Polygons.Triangle = Triangle;
        class Square {
            constructor() {
                console.log("正方形被创建~");
            }
        }
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var polygons = Shapes.Polygons;
let sq = new polygons.Square();
