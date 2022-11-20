console.log(typeof 'hello');

let p = {x:1,y:2}
// 上面这个p直接使用了类型推论，然后函数中的参数直接使用p的类型
// function func(point:{x:number,y:number})与下方效果相同
function func(point:typeof p) {
    console.log(point.x+point.y);
    
}
func({x:1,y:20})