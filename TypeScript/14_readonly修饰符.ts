class Persons {
    // 注意：只要是readonly来修饰的属性，必须手动提供明确的类型
    readonly age: number = 18;//相当于给一个默认值
    constructor(age : number){
        this.age = age
    }
    /* 错误演示:
    change() {
        this.age = 20
    } */
}
// readonly只能修饰属性，而不能修饰方法

interface Iperson {
    readonly name: string
}
let iperobj: Iperson = {
    name: 'yang'
}