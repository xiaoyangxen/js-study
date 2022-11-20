// 交叉类型&,功能类似于接口继承，用于组合多个类型为一个类型
interface people {name:string}
interface concatp {phone:string}
type aaa = people& concatp
let obj:aaa = {
    name:'yang',
    phone:'aaa'
}


// 交叉类型(&)和接口继承(extends)的区别
// 相同点：都可以实现对象类型的组合
// 不同点：对于同名属性之间处理类型冲突的方式不同
interface A {
    fn: (value:number)=>string
}
// 这种会直接报错
// interface B extends A{
//     fn: (value:string)=>string
// }
interface B {
    fn: (value:string)=>string
}
type C = A&B
let c:C
c.fn(1)
c.fn('a')
// 而交叉类型A&B则为fn:(value:number | string)=>string