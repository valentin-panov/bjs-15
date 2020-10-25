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
    return weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).length;  // не понимаю, откуда у нас взялся weapon, и что это такое
 }

 function hasReliableWeapons (askedDurability) {
   return weapons.find(weapon => ((weapon.durability > askedDurability) === true));
 }