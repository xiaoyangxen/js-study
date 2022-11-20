// 泛型是可以在保证类型安全的前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class中
function id<Type>(value:Type):Type {
    return value
}
// 调用函数的时候需要使用明确的类型
const num= id<number>(10)
console.log(num);
// 简写：const num= id(10)
// ts内部会采用一种叫做类型参数推断的机制，根据传入的实参自动推断出类型变量type的类型
const bool= id(undefined)
console.log(bool);
