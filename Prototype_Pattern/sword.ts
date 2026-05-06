import Prototype from "./prototype.ts";
import Weapon from "./weapon.ts";

export default class Sword implements Weapon {
    durability: number;
    attack: number;
    typeAttack: string;

    constructor(durability: number, attack: number, typeAttack: string) {
        this.durability = durability;
        this.attack = attack;
        this.typeAttack = typeAttack;
    }

    setDurability(durability: number): void {
        this.durability = durability;
    }

    setAttack(attack: number): void {
        this.attack = attack;
    }

    setTypeAttack(typeAttack: string): void {
        this.typeAttack = typeAttack;
    }

    clone(): Sword {
        return new Sword(this.durability, this.attack, this.typeAttack);
    }
}
