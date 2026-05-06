import Prototype from "./prototype.ts";
import Weapon from "./weapon.ts";

export default class Enemy implements Prototype<Enemy> {

    health: number;
    defense: number;
    weapon: Weapon;

    constructor(health: number, defense: number, weapon: Weapon) {
        this.health = health;
        this.defense = defense;
        this.weapon = weapon;
    }

    setHealth(health: number): void {
        this.health = health;
    }

    setDefense(defense: number): void {
        this.defense = defense;
    }

    setWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    clone(): Enemy {
        return new Enemy(this.health, this.defense, this.weapon.clone());
    }
}
