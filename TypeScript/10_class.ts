class Person {
    age:number;
    gender = '男'
    constructor(age:number,gender:string) {
        this.age = age;
        this.gender = gender
    }
    // gender: string = '男'
}
const pclass = new Person(18,'女')
console.log(pclass);

// pclass的类型是Person