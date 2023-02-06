const battleMembers = require('./game-data');

// Math.round(Math.random() * (max - min) + min);
const dragonDamage = () => {
  return `O dano do dragão foi: ${Math.round(Math.random() * (battleMembers.dragon.strength - 15) + 15)}`;
};

const warriorDamage = () => {
  const minDamage = battleMembers.warrior.strength;
  const maxDamage = (battleMembers.warrior.strength * battleMembers.warrior.weaponDmg);
  return `O dano do Warrior foi: ${Math.round(Math.random() * (maxDamage - minDamage) + minDamage)}`;
};

// { dano: ---, mana: --- }
const mageDamage = () => {
  const minDamage = battleMembers.mage.intelligence;
  const maxDamage = (battleMembers.mage.intelligence * 2);
  let mageTotalMana = battleMembers.mage.mana;
  const mageDamage = {
    damage: 'Não possui mana suficiente',
    manaSpent: 0,
  }
  if (mageTotalMana > 0) {
    mageDamage.damage = Math.round(Math.random() * (maxDamage - minDamage) + minDamage);
    mageDamage.manaSpent = 15;
  }
  return mageDamage;
};

module.exports = { dragonDamage, warriorDamage, mageDamage };
