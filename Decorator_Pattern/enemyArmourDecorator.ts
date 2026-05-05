import EnemyDecorator from "./enemyDecorator.ts";

export default class EnemyArmorDecorator extends EnemyDecorator {
    takeDamage(): number {
        return (this.enemy.takeDamage() / 1.5);
    }
}