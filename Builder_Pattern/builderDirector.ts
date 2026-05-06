import Builder from "./builder.ts";
import House from "./house.ts";

export default class BuilderDirector {
    builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    buildHouse(
        material: string,
        floors: number,
        rooms: number,
        pool: boolean,
        garage: boolean,
        garden: boolean
    ): House {
        return this.builder
            .addConstructionMaterial(material)
            .addFloors(floors)
            .addRooms(rooms)
            .addPool(pool)
            .addGarage(garage)
            .addGarden(garden)
            .buildHouse();
    }
}
