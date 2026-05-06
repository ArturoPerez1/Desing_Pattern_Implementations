import Enemy from "./enemy.ts";
import Sword from "./sword.ts";

const enemy1 = new Enemy(25, 30, new Sword(25, 25, "Fuego"));
const enemy2 = enemy1.clone();

enemy2.setHealth(10);
enemy2.setDefense(50);
enemy2.weapon.setDurability(5);
enemy2.weapon.setAttack(40);
enemy2.weapon.setTypeAttack("Hielo");

console.log(enemy1);
console.log(enemy2);
