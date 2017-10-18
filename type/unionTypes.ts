/**
 * Created by chaolinding on 2017/10/18.
 */
/*
联合类型
 number | string | boolean  表示可以传入 number string boolean 3种类型的任意一种
 */
function padLeft( value: string, padding: number | string | boolean ){
    if( typeof padding === "number" ){
        return Array(padding + 1).join(" ") + value;
    }

    if( typeof padding === "string" ){
        return padding + value;
    }

    console.log( typeof padding )
    if( typeof padding === "boolean" ){
        return padding ? value + " true" : value + " false";
    }
}

console.log( padLeft( "123", "234") );