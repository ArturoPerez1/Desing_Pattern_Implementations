import AttackInfo from "./attackInfo.ts";
import { AttackType } from "./attackType.ts";
import FireAttack from "./fireAttack.ts";
import IceAttack from "./iceAttack.ts";
import NormalAttack from "./normalAttack.ts";

let normalAttack = new NormalAttack();
let fireAttack = new FireAttack();
let iceAttack = new IceAttack();

normalAttack.setNext(fireAttack);
fireAttack.setNext(iceAttack);

normalAttack.calculateDamage(new AttackInfo(AttackType.ice, 10));
normalAttack.calculateDamage(new AttackInfo(AttackType.normal, 10));

