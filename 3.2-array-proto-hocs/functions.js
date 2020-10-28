"use strict";

// TASK 1

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(weapon => weapon.name);
}

function hasReliableWeapons (askedDurability) {
  return (weapons.some(weapon => weapon.durability > askedDurability));
}

function getCountReliableWeapons (askedDurability) {
  return weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).length;
}

function getReliableWeaponsNames (askedDurability) {
  return (weapons.filter(weapon => ((weapon.durability > askedDurability) === true)).map(weapon => weapon.name));
}

function getTotalDamage () {
  return  weapons.reduce((totalDamage, weapon, index) => (totalDamage + weapon.attack), 0);
  // написал и забыл, что это за 0 в конце 8( - начальный индекс?
  // totalDamage попадает в замыкание reduce?
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
  if (!arr1 || !arr2 || (arr1.length != arr2.length)) {return false;} // ускоряем обработку, отлавливаем явные несоответствия и неверный вход
  if (arr1.every((value, index) => value === arr2[index])) { // сравниваем значения по индексу
    return true; // всё сошлось
  }
  return false; // не сошлось
}

function memorize(fn, limit) { // fn - функция, которая производит вычисления, limit - ограничение по количеству запоминаемых результатов, ...theArgs - аргументы для вызываемой функции
  const memory = []; // создаём замкнутую память {args, result}

// дальше ступор 8(

  function  () {
    if (memory.find()) {
      return true;
    } else {
      return false;
    }
  }

  return fn;
}