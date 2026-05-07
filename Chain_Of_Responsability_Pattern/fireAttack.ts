import AttackHandle from "./attackHandle.ts";
import AttackInfo from "./attackInfo.ts";
import { AttackType } from "./attackType.ts";

export default class FireAttack extends AttackHandle {
    calculateDamage(attackInfo: AttackInfo): void {
        if (attackInfo.type === AttackType.fire) {
            console.log(`Daño por Ataque fuego: ${attackInfo.baseDamage * 2.5}`);
            return;
        }

        super.calculateDamage(attackInfo);
    }
}
