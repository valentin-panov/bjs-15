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
    return weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).length;
 }
