import Shape from "./shape.ts";
import ShapeVisitor from "./shapeVisitor.ts";

export default class Rectangle implements Shape {

    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }

}