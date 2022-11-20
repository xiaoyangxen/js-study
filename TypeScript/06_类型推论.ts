let num = 16
// 自动推论出num的类型为number
function add4(num1:number,num2:number) {
    return num1+num2
}
// 自动推论出add4的返回值类型为number

// 类型断言 使用as关键字，as关键字后面的类型是一个更具体的类型
// <a href=""></a>
// 获取这个节点之后类型推论只能认为这是一个HTMLElement类型，无法确切是什么标签，所以无法获取到a标签中的href属性
const alink = document.querySelector('a') as HTMLAnchorElement
// 另一种方法，不常用，知道即可
const alink1 = <HTMLAnchorElement>document.querySelector('a')
// 在浏览器中查类型方法：
//     1.控制台打开，然后选中某个标签的元素
//     2.console.dir($0),打印出的节点属性最下方就可以明确找到是什么类型的标签，比如：HTMLAnchorElement
