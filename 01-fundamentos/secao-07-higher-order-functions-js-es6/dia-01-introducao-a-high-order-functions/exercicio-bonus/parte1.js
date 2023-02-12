const { battleMembers, warrior, mage, dragon } = require('./game-data');

// Math.round(Math.random() * (max - min) + min);
const dragonAttack = (dragon) => {
  const minAttack = 15
  return Math.round(Math.random() * (dragon.strength - minAttack) + 15);

};

const warriorAttack = (warrior) => {
  const minAttack = warrior.strength;
  const maxAttack = (warrior.strength * warrior.weaponDmg);
  return Math.round(Math.random() * (maxAttack - minAttack) + minAttack);
};

// { dano: ---, mana: --- }
const mageAttack = (mage) => {
  const minAttack = mage.intelligence;
  const maxAttack = (mage.intelligence * 2);
  let mageTotalMana = mage.mana;
  const mageAttack = {
    damage: 'Não possui mana suficiente',
    manaSpent: 0,
  }
  if (mageTotalMana > 0) {
    mageAttack.damage = Math.round(Math.random() * (maxAttack - minAttack) + minAttack);
    mageAttack.manaSpent = 15;
  }
  return mageAttack;
};

module.exports = { dragonAttack, warriorAttack, mageAttack };
