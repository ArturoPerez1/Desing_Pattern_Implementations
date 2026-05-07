import AreaCalculatorVisitor from "./areaCalculatorVisitor.ts";
import Circle from "./circle.ts";
import Rectangle from "./rectangle.ts";
import Shape from "./shape.ts";

const shapes: Shape[] = [
    new Circle(10),
    new Rectangle(20, 30),
];

const areaVisitor = new AreaCalculatorVisitor();


for (const shape of shapes) {
    shape.accept(areaVisitor);
}

