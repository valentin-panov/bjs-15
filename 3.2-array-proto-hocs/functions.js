"use strict";
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];


function getNames() {
   return weapons.map(function getName (arg) {
      debugger;
            return arg.name;
         }
      );
}


function getCountReliableWeapons (askedDurability) {

   debugger;

   console.log(weapons.map(function moreDurable (arg, askedDurability) {
      if (arg.durability > askedDurability) {
         return arg;
      } else {
         return null;
      }
   }).length);
   
   return weapons.map(function moreDurable (arg, askedDurability)).length;

}
