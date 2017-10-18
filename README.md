# ts-demo-3

### 类型兼容性
- 如果x要兼容y，那么x至少与y有相同的属性
``` 
    interface Named {
        name: string;
    }
    
    let x: Named;
    let y = { name: 'Alice', location: 'Seattle' };
    x = y;
    
 ```
 - 上面的代码中满足x兼容y
 - 检查参数的时候，使用相同的规则
 
 - 函数兼容-在类型一致的情况下，参数多的函数能够兼容参数少的函数，即：参数少的函数能够赋值给参数多的函数
 - 要查看x是否能赋值给y，首先看它们的参数列表。 x的每个参数必须能在y里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。
 - 返回类型遵循相同的规则
```
let x = (a1: number) => void;
let y = (a2: number, a3: string) => void;

y = x; // OK  x的参数在y中都能找到
x = y;// Error

```
 
### 类 兼容
- 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 
- 比较两个类类型的对象时，只有实例的成员会被比较。 
- 静态成员和构造函数不在比较的范围内。
```
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK

```
#### 类 私有成员
- 私有成员会影响兼容性判断。 
- 当类的实例用来检查兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 
- 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。

### 泛型 兼容性
- 对于没有确定类型，或者泛型中没有使用泛型类型 会使用any进行比较
- 泛型一旦确定类型， 将使用具体的确定的类型进行比较

### 联合类型
- number|string|boolen
```
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```
- 上面的代码只能调用联合类型的共有部分

### 使用断言
```
let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
```

### instaceof  判断实例类型

### null undefined
- 可以赋值给任何类型
- --strictNullChecks 可以使上一条失效
- 加上这个配置参数后 可选参数，可选属性会被自动的加上 | undefined 类型
```
let s  = "foo"；
s = null; //错误 null 不能赋值给string
```
- string | null，string | undefined和string | undefined | null是不同的类型

### type 可以用来起别名
- 与交叉类型一起使用
```
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
```

### 别名 和 接口 的区别
- 别名可以像接口一样用于定义类型
- 别名不能被extends 喝 implements
