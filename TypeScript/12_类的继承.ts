// 1.extends继承父类。2.implement实现接口
// implement是ts提供的
interface Singable {
    sing():void
}
class Person implements Singable {
    sing() {
        console.log('门前大桥下');
        
    }
}