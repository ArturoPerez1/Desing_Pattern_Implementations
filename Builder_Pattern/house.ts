export default class House {
    constructionMaterial: string = "";
    floors: number = 0;
    rooms: number = 0;
    hasPool: boolean = false;
    hasGarage: boolean = false;
    hasGarden: boolean = false;

    setConstructionMaterial(material: string): void {
        this.constructionMaterial = material;
    }

    setFloors(floors: number): void {
        this.floors = floors;
    }

    setRooms(rooms: number): void {
        this.rooms = rooms;
    }

    setHasPool(hasPool: boolean): void {
        this.hasPool = hasPool;
    }

    setHasGarage(hasGarage: boolean): void {
        this.hasGarage = hasGarage;
    }

    setHasGarden(hasGarden: boolean): void {
        this.hasGarden = hasGarden;
    }
}
