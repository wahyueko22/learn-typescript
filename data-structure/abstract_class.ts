abstract class ShapeAbstract {
  protected color : string;
    
  public constructor(color : string) {
    this.color = color;
  }
    
  public abstract  getArea() : number;
    
  public abstract getPerimeter() : number;
    
  public  display() {
    console.log("color : " + this.color)
  }
}

class Rectangle extends ShapeAbstract {
  private length : number;
  private width : number;

  public constructor(color: string, length: number, width: number) {
    super(color);
    this.length = length;
    this.width = width;
  }
  
  public getArea(): number {
    return this.length * this.width;
  }
  
  public  getPerimeter(): number {
    return 2 * (this.length + this.width);
  }
}

const myRec = new Rectangle("red", 5, 10);
console.log(myRec.getArea());
myRec.display()


class Rectangle2 extends ShapeAbstract {

  // eslint-disable-next-line no-unused-vars
  public constructor(color: string, private length: number,private width: number) {
    super(color);
  }
  
  public getArea(): number {
    return this.length * this.width;
  }
  
  public  getPerimeter(): number {
    return 2 * (this.length + this.width);
  }
}

const myRec2 = new Rectangle2("red", 5, 10);
console.log(myRec2.getArea());
myRec2.display()