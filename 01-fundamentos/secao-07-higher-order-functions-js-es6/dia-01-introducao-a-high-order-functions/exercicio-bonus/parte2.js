const { battleMembers, warrior, dragon, mage } = require("./game-data.js");
const { dragonAttack, warriorAttack, mageAttack } = require('./parte1.js');

const gameActions = {
  warriorTurn: () => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: () => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: () => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.turnResults());
