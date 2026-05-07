import AttackInfo from "./attackInfo.ts";

export default abstract class AttackHandle {
    private nextAttack: AttackHandle | null = null;
    
    setNext(nextAttack: AttackHandle) {
        this.nextAttack = nextAttack;
    }

    calculateDamage(attackInfo: AttackInfo): void{
        if(this.nextAttack != null){
            this.nextAttack.calculateDamage(attackInfo);
            return;
        }

        throw new Error("No handler could process this attack.")
    }
}
