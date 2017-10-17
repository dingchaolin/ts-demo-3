/**
 * Created by chaolinding on 2017/10/17.
 */
/*
命名空间起别名
 */
namespace Shapes{
    export namespace Polygons{
        export class Triangle{

        }

        export class Square{
            constructor(){
                console.log("正方形被创建~")
            }
        }
    }
}

import polygons = Shapes.Polygons;//var polygons = Shapes.Polygons;

let  sq = new polygons.Square() // 等价于 new Shapes.Polygons.Square()

