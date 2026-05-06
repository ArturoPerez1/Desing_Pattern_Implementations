import SavePoint from "./savePoint.ts";

export default class GameHistory {
    private readonly savedPoints: Map<number, SavePoint> = new Map();

    addSavePoint(id: number, savePoint: SavePoint): void{
        this.savedPoints.set(id, savePoint);
    }

    getSavedPoint(id: number): SavePoint{
        if(!this.savedPoints.has(id)){
            throw new Error(`No existe un punto de guardado con id ${id}`);
        }

        return this.savedPoints.get(id)!;
    }
}
