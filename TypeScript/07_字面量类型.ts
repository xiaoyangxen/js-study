let age = 18
const numb = 18
// 对比上方两个变量的类型，说明不同的声明方式也会影响到变量的类型


// 利用字面量来限制举例：
const fangxiang = function(direction:'up'|'down'|'left'|'right'):void {
    console.log(direction);
}
fangxiang('up')
// 所以fangxiang这个函数就只能使用这四种参数