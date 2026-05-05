import Forest from "./forest.ts";
import TreeFlyweightFactory from "./treeFlyweightFactory.ts";

const treeFlyweightFactory = new TreeFlyweightFactory();
const forest = new Forest(treeFlyweightFactory);

forest.plantTree(20, 5, "pine");
forest.plantTree(24, 8, "pine");
forest.plantTree(10, 12, "oak");
forest.plantTree(16, 18, "oak");

forest.render();

console.log(`Arboles plantados: ${forest.getTreeCount()}`);
console.log(`Flyweights creados: ${treeFlyweightFactory.getTotalTypes()}`);
