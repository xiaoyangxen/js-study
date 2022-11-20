let person:{name:string;age:number;sayHi():void} = {
    name:'yang',
    age:18,
    sayHi(){}
}

// 可选属性例子，axios
function myAxios(config:{url:string;methods?:string}) {
    console.log(config);
    
}
myAxios({url:'http://127.0.0.1:8080'})