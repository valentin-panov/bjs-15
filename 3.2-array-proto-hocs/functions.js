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
  return weapons.filter(weapon => (weapon.durability > askedDurability)).length;
}

function getReliableWeaponsNames (askedDurability) {
  return (weapons.filter(weapon => (weapon.durability > askedDurability)).map(weapon => weapon.name));
}

function getTotalDamage () {
  return  weapons.reduce((totalDamage, weapon, index) => (totalDamage + weapon.attack), 0);
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
  if (arr1 && arr2 && (arr1.length == arr2.length) && arr1.every((value, index) => value === arr2[index])) { // сравниваем значения по индексу
    return true; // всё сошлось
  }
  return false; // не сошлось
}


function memorize(fn, limit) { // fn - функция, которая производит вычисления, limit - ограничение по количеству запоминаемых результатов, ...theArgs - аргументы для вызываемой функции

// создаём замкнутую память {args, result}
  const memory = [];
  memory.length = 0;

  return function memorizeReturn (...theArgs) {
    
    // ищем в памяти объект с запрашиваемыми аргументами
    let checkArgs = memory.find(item => compareArrays(theArgs, item.args));

    // если такие аргументы есть в памяти, возвращаем их
    if (checkArgs != undefined) {
      return checkArgs.result;
    }

    //иначе вычисляем результат
    let resultFn = fn(...theArgs);

    // пишем результат в память и
    // если массив больше лимита, режем массив. можно сделать другую проверку и не увеличиваться больше лимита, но не до того
    if (memory.unshift({args: theArgs, result: resultFn}) > limit) {
      memory.length = limit;
    };

    //возвращаем запрашиваемый результат
    return resultFn;
  }

}