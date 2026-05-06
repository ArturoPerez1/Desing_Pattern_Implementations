export default class SavePoint {
    private readonly currentLevel: number;

    constructor(level: number){
        this.currentLevel = level;
    }

    getLevel(): number{
        return this.currentLevel;
    }
}
