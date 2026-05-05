import BaseEnemy from "./baseEnemy.ts";
import EnemyArmorDecorator from "./enemyArmourDecorator.ts";
import EnemyHelmetDecorator from "./enemyHelmetDecorator.ts";

let enemy = new BaseEnemy();
let enemyWithArmor = new EnemyArmorDecorator(enemy);
let enemyWithArmorAndHelmet = new EnemyHelmetDecorator(enemyWithArmor);
console.log(enemyWithArmorAndHelmet.takeDamage());