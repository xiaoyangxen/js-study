function add(num1:number,num2:number):number {
    return num1+num2
}
let add1 = function(num1:number,num2:number):number {
    return num1+num2
}
// 给函数的参数和返回值限制类型

// 2.同时指定函数的参数和返回值类型
const add3:(num1:number,num2:number) =>number =(num1,num2)=>{
    return num1+ num2
}

// 3.没有返回值用void
function xxx(name:string):void{
    console.log(name);
    
}

// 4.函数可选参数,加一个（？）参数就可以传也可以不传
function mySlice(start?:number,end?:number):void {
    console.log(start,end);
    
}
mySlice(1)