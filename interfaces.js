interface shape{
  name: string;
  side: number;
  area(): number;
}
class findAreaOfSquar implements shape{
  constructor(name, side)
  {
    this.name = name;
    this.side = side;
    area(){
      return side*side;
    };
  }
}

var findAreaOfSquar1 = new findAreaOfSquar("square", 21);
console.log(findAreaOfSquar1);
