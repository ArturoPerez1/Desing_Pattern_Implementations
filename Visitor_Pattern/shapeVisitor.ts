import Circle from "./circle.ts";
import Rectangle from "./rectangle.ts";

export default interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void
}