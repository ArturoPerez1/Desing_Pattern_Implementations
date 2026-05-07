import { AttackType } from "./attackType.ts";

export default class AttackInfo{
    type: AttackType;
    baseDamage: number;

    constructor(attackType: AttackType, baseDamage: number){
        this.type = attackType;
        this.baseDamage = baseDamage;
    }
} 