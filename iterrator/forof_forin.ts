/**
 * Created by chaolinding on 2017/10/18.
 */
let arr = [1,"2",false];
/* value
遍历出的是数组中的每个元素
关注于迭代对象的值
相当于for循环中的 arr[i]

 */
for( let value of arr ){
    console.log( value );
}

/*
 0 1 string
 1 2 string
 2 false string
 for-in 相当于for循环 只是 for 循环中的 i 是 number， 此处的i 是string 相当于key
 提供了一种查看对象属性的方法

 */
for( let key in arr ){
    console.log( key, arr[key], typeof key );
}

/*
只有值 没有key
 */
let pets = new Set(["cat", "monkey", "dog"]);
pets["spe"] = "human";

for( let pet in pets ){
    console.log( pet );//只有一个spe的属性
}

for( let pet of pets ){
    console.log( pet );//cat monkey dog
}

console.log( pets[0])//不能使用