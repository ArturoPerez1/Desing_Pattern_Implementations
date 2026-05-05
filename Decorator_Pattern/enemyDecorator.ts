import IEnemy from "./enemy.ts";

export default abstract class EnemyDecorator implements IEnemy {
    protected enemy: IEnemy;

    constructor(enemy: IEnemy){
        this.enemy = enemy;
    }

    abstract takeDamage(): number;
}