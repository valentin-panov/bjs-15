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

// создаём замкнутую память {args, result}
  const memory = [];
  memory.length = 0;

  return function memorizeReturn (...theArgs) {
//    debugger;
    
    // ищем в памяти объект с запрашиваемыми переменными
    let checkArgs = memory.find(item => compareArrays(theArgs, item.args));

    // если таких аргументов в памяти ещё нет, вызываем функцию и заносим результат в память
    if (checkArgs === undefined) {

      //задержка выполнения
      sleep(500);

      // пишем результат в память и
      // если массив больше лимита, режем массив. можно сделать другую проверку и не увеличиваться больше лимита, но не до того
      if (memory.unshift({args: theArgs, result: fn(...theArgs)}) > limit) {
        memory.length = limit;
      };

      //возвращаем запрашиваемую функцию
      return fn(...theArgs);

    } else {

      //иначе просто возвращаем результат из памяти
      return checkArgs.result;
    }
  }

}