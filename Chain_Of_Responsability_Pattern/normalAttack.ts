import AttackHandle from "./attackHandle.ts";
import AttackInfo from "./attackInfo.ts";
import { AttackType } from "./attackType.ts";

export default class NormalAttack extends AttackHandle {
    calculateDamage(attackInfo: AttackInfo): void {
        if (attackInfo.type === AttackType.normal) {
            console.log(`Daño por Ataque normal: ${attackInfo.baseDamage}`);
            return;
        }

        super.calculateDamage(attackInfo);
    }
}
