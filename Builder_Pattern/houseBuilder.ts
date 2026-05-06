import Builder from "./builder.ts";
import House from "./house.ts";

export default class HouseBuilder implements Builder{
    private house = new House();

    reset(): void {
        this.house = new House();
    }

    addConstructionMaterial(material: string): Builder {
        this.house.setConstructionMaterial(material);
        return this;
    }
    
    addFloors(floors: number): Builder {
        this.house.setFloors(floors);
        return this;
    }
    
    addRooms(rooms: number): Builder {
        this.house.setRooms(rooms);
        return this;
    }

    addPool(pool: boolean): Builder {
        this.house.setHasPool(pool);
        return this;
    }

    addGarage(garage: boolean): Builder {
        this.house.setHasGarage(garage);
        return this;
    }

    addGarden(garden: boolean): Builder {
        this.house.setHasGarden(garden);
        return this;
    }

    buildHouse(): House {
        return this.house;
    }
}
