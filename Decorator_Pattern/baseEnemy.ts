import IEnemy from "./enemy.ts";

export default class BaseEnemy implements IEnemy {
    takeDamage(): number {
        return 10;
    }
}