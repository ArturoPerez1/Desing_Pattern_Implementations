import SavePoint from "./savePoint.ts";

export default class Game {
    private currentLevel: number = 1;

    setLevel(level: number):void{
        this.currentLevel = level;
    }

    getLevel(): number{
        return this.currentLevel;
    }

    createMemento(): SavePoint{
        return new SavePoint(this.currentLevel);
    }

    restore(memento: SavePoint): void{
        this.currentLevel = memento.getLevel();
    }
}
