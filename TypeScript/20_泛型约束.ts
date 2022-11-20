function id1<Type>(value:Type[]):Type[] {
    console.log(value.length);
    return value
}
// 添加约束，泛型必须有length属性
interface Ilength {length:number}
function id2<Type extends Ilength>(value:Type):Type {
    console.log(value.length);
    return value
}
id2([1,2,3])
id2('abc')
// 错误示范，数值类型没有length属性
// id1(123)


function getProp<Type,Key extends keyof Type>(obj:Type,key:Key) {
    return obj[key]
}
let propname = getProp({name:'yang',age:18},'name')
console.log(propname);
