/* 1.参数个数
2.参数类型
3.返回值类型 */

// 1.参数个数
// 参数多的兼容参数少的(参数少的可以赋值给多的)
// 和对象类型正好相反
type F1 = (a:number)=>void
type F2 = (a:number,b:number)=>void
let f1: F1
let f2: F2 = f1
// 2.参数类型
// 相同位置的参数类型要相同(原始类型)或兼容(对象类型)
type F3 = (a:number,b:{x:number})=>void
type F4 = (a:number,b:{x:number,y:number})=>void
let f3: F3
let f4: F4
f4 = f3
// 注意：此处与前面的接口兼容性冲突
// 将对象拆分开，把每个属性看做一个参数，参数少的赋值给参数多的

// 3.返回值类型 
// 只关注返回值类型本身即可
type F5 = ()=>{name:string }
type F6 = ()=>{name:string;age:number}
let f5: F5
let f6: F6
f5=f6
// 如果是原始类型，则类型相同即可
// 如果是对象类型，成员多的赋值给成员少的