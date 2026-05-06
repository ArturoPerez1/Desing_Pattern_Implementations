import House from "./house.ts";

export default interface Builder {
    reset(): void;
    addConstructionMaterial(material: string): Builder;
    addFloors(floors: number): Builder;
    addRooms(rooms: number): Builder;
    addPool(pool: boolean): Builder;
    addGarage(garage: boolean): Builder;
    addGarden(garden: boolean): Builder;

    buildHouse(): House;
}
