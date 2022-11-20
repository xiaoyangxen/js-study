let numbers: number[] = [1,2,5]
console.log(numbers);
let strings: Array<string> = ['s','a']
console.log(strings);
// 区别下面两种
let arr: (number | string)[] = [1,'s']
console.log(arr);
// let arr1: number | string[] = ['a','s']或者是数字类型
// console.log(arr);
// 类型别名 
type CustomArray = (number | string)[];
let arr1: CustomArray = [1,'s']
console.log(arr1);
