// 1.用interface关键字来声明接口
interface IPerson {
    name:string;
    age:number;
    sayHi():void
}
// 用这个接口可以作为多个对象的限制条件
let persons:IPerson ={
    name:'yang',
    age:18,
    sayHi(){}
}
console.log(persons);
//2. interface(接口)和type(类型别名)的异同
// 相同点：都可以给对象指定类型
// 不同点：接口只能为对象指定类型。
//         类型别名，可以为任意类型指定别名
// type NumStr = number | string


// 3.接口继承
interface point2d {x:number;y:number}
interface point3d extends point2d {z:number}
let point3dObj:point3d= {
    x:1,
    y:2,
    z:3
}