import ShapeVisitor from "./shapeVisitor.ts";

export default interface Shape{
    accept(visitor: ShapeVisitor): void;
}