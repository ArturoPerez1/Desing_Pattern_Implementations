import AttackHandle from "./attackHandle.ts";
import AttackInfo from "./attackInfo.ts";
import { AttackType } from "./attackType.ts";

export default class IceAttack extends AttackHandle {
    calculateDamage(attackInfo: AttackInfo): void {
        if (attackInfo.type === AttackType.ice) {
            console.log(`Daño por Ataque hielo: ${attackInfo.baseDamage * 1.5}`);
            return;
        }

        super.calculateDamage(attackInfo);
    }
}
