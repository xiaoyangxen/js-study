// 1.public
class Animal {
    public move() {
        console.log('MOVING');
        
    }
}
const ANI = new Animal()
ANI.move()

// 2.protected
// 仅对其声明所在类和子类中（非实例对象）可见
class Animal2 {
    protected a = '123'
    protected move() {
        console.log('MOVING'+this.a);
    }
    run() {
        this.move()
    }
}
const ani2 = new Animal2()
ani2.run()

// Animal2的实例对象也不可以调用这个move，只能是类中的其他方法调用protected
class Dog extends Animal2 {
    bark() {
        console.log('汪汪');
        console.log(this.a);
        this.move()
    }
}
const dog = new Dog()
// dog.move()无法使用，父类中的方法只能用于Dog类中
dog.bark()

// 3.privete 只在当前类中可见，对实例对象以及子类也是不可见的
class Animal3 {
    private move() {
        console.log('moving，private');
    }
    walk() {
        this.move()
    }
}
