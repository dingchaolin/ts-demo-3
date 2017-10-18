/**
 * Created by chaolinding on 2017/10/18.
 */
interface Square{
    kind: "square";
    size: number;
}

interface Rectangle{
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle{
    kind: "circle";
    radius: number;
}

interface Triangle{
    kind: "triangle";
    di: number;
    height: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x: never ): never{
    throw new Error("Unexpected Object: " + x );
}

function area(s: Shape){
    switch ( s.kind ){
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(<never>s);
    }
}

let s: Shape = {
    kind: "triangle",
    di: 10,
    height: 5
};

area( s );