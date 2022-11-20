/* 两种类型系统：
1.Structural Type System（结构化类型系统）
2.Nominal Type System（标明类型系统） */
// ts采用的是结构化类型系统，也叫作 duck typing(鸭子类型)，类型检查关注的是值所具有的形状
// 在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型
class Point {x:number;y:number}
class Point2D {x:number;y:number}
const p: Point = new Point2D()
// 由上可知point和point2d因为属性类型相同则形成了兼容
