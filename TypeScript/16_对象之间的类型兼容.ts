class Point1 {x:number;y:number}
class Point3D {x:number;y:number;z:number}
const p1: Point1 = new Point3D()
// 成员多的可以复制给少的
// 对于对象类型来说，y的成员至少与x相同，则x兼容y
