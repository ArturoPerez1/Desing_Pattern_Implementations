import EnemyDecorator from "./enemyDecorator.ts";

export default class EnemyHelmetDecorator extends EnemyDecorator {
    takeDamage(): number {
        return (this.enemy.takeDamage() / 2);
    }
}