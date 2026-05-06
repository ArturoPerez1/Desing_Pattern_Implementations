import BuilderDirector from "./builderDirector.ts";
import HouseBuilder from "./houseBuilder.ts";


let director = new BuilderDirector(new HouseBuilder());
let house = director.buildHouse(
    "Madera",
    5,
    5,
    true,
    false,
    true
)

console.log(house);
