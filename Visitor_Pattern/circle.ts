import Shape from "./shape.ts";
import ShapeVisitor from "./shapeVisitor.ts";

export default class Circle implements Shape {

    private radius: number

    constructor(radius: number) { 
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);

    }
}