"use strict";

// TASK 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(function getName (arg) { // нужно ли передавать в эту функцию объект? или работать с тем, что есть?
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

 // TASK 2

 function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100); // delay 100ms
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
   if (!arr1 || !arr2 || (arr1.length != arr2.length)) {return false;} // ускоряем обработку, отлавливаем явные несоответсвия
   if (arr1.every((value, index) => value === arr2[index])) { // сравниваем значения по индексу
      return true; // всё сошлось
   }
   return false; // не сошлось
}

function memorize(fn, limit) { // fn - функция, которая производит вычисления, limit - ограничение по количеству результатов
   let memory = { args, result };
   return fn;
}