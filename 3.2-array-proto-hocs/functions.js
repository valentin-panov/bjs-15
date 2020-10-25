"use strict";
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(function getName (arg) {
            return arg.name;
         }
      );
}

function getCountReliableWeapons (askedDurability) {
    return weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).length;  // не понимаю, откуда у нас взялся weapon, и что это такое в рамках стрелочной функции
 }

 function hasReliableWeapons (askedDurability) {
   return (weapons.some(weapon => weapon.durability > askedDurability));
 }

 function getReliableWeaponsNames (askedDurability) {
    return (weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).map(weapon => weapon.name));
 }

 function getTotalDamage () {
   return  weapons.reduce((totalDamage, weapon, index) => {
      return totalDamage + weapon.attack;
   }, 0);
 }