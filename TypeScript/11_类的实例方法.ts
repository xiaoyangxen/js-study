class point {
    x=10;
    y=10;
    scale(n:number):void{
        this.x *= n;
        this.y *= n;
        console.log(this.x + this.y);
        
    }
}
const pointclass = new point()
console.log(pointclass);

pointclass.scale(10)