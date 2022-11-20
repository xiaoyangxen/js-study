// 枚举类型类似于联合类型加字面量组合的功能
enum Direction {up=12,down,left,right}

const fangxiang1 = function(direction:Direction) {
    console.log(direction);
    
}
// 这一步比字面量类型多一点，需要用预定的(枚举类型.xxx )  来获取
fangxiang1(Direction.up)


// 枚举类型是有值的，从0开始，所以调用函数的参数时候也可以使用这个0-3来显示函数的参数
// fangxiang1(0)

// 字符串类型枚举没有自增行为，因此字符串枚举的每个成员必须有初始值
enum Direction1 {ups='up',down='down',left='left',right='right'}
const fangxiang2 = function(direction:Direction1) {
    console.log(direction);
    
}
fangxiang2(Direction1.ups)

// 枚举是TS为数不多的非js类型级扩展（不仅仅是类型）的特性之一
// 因为：其他类型仅仅被当做类型，而枚举不仅能作为类型，还提供值
// 也就是说,其他类型会在编译为js代码时自动移除.但是,枚举类型会被编译为js代码
