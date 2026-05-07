import Circle from "./circle.ts";
import Rectangle from "./rectangle.ts";
import ShapeVisitor from "./shapeVisitor.ts";

export default class AreaCalculatorVisitor implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * circle.getRadius() * circle.getRadius();
        console.log(`Área del círculo: ${area}`);
    }

    visitRectangle(rectangle: Rectangle): void {
        const area = rectangle.getWidth() * rectangle.getHeight();
        console.log(`Área del rectángulo: ${area}`);
    }
}