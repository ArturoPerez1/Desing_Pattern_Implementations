import Prototype from "./prototype.ts";

export default interface Weapon extends Prototype<Weapon>{
    durability: number;
    attack: number;
    typeAttack: string;
    setDurability(durability: number): void;
    setAttack(attack: number): void;
    setTypeAttack(typeAttack: string): void;
}
