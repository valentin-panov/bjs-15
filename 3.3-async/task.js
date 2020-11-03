"use strict";

class AlarmClock {
   constructor (){
      this.alarmCollection = []; // коллекция будильников
      this.timerId = null; // айди таймера !!! не понимаю. В одном объекте по этому классу будут содержаться несколько будильников, и на всех них только один айди таймера?
   }

   addClock (time, fn, id){  
// добавляет новый звонок в коллекцию существующих
// метод принимает время (формат hh:mm) коллбэк и айди
      if (!id) {throw new Error('Не задан id будильника.');};  // если id не задан, пробрасываем ошибку

      if (this.alarmCollection.some(timer => timer.id == id)) {  // если id не уникален, возвращаем console.error()
         return console.error(`Ошибка создания нового будильника. ID будльника \"${id}\" не уникален.`);
      }

      this.alarmCollection.push({id: id, time: time, callback: fn}); // добавляем в массив звонков объект со свойствами id, time, callback.
   }

   removeClock (id) {
// удаляет определённый звоноки возвращает логическое значение об успешности/провале удаления объекта звонка из общего массива
      return !!(this.alarmCollection.splice(this.alarmCollection.findIndex(alarm => (alarm.id == id)), 1).length);
   }

   getCurrentFormattedTime () {
// возвращает текущее время в строковом формате HH:MM.
      return (`${checkTimeDigits(new Date().getHours())}:${checkTimeDigits(new Date().getMinutes())}`);
   }

   start () {
// запускает все звонки
      if (!this.timerId) {
         this.timerId = setInterval (() => (this.alarmCollection.forEach(alarm => checkClock(alarm, this.getCurrentFormattedTime()))), 100);
      }
   }

   stop () {
// Если у идентификатора текущего таймера есть значение, вызываем clearInterval для удаления интервала, а так же удаляем значение из свойства "идентификатор текущего таймера"
      if (this.timerId) {
         clearInterval(this.timerId);
         this.timerId = null;
      }
   }

   printAlarms () {
// выводим информацию о каждом звонке (id и time).
      console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
      this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} установлен на ${alarm.time}`));
   }

   clearAlarms () {
// Вызывает метод остановки интервала.
// Удаляет все звонки
      this.stop();
      this.alarmCollection.length = 0;
   }
}

function checkClock (alarm, time) { 
// принимает звонок и проверяет: если текущее время совпадает со временем звонка, вызываем колбек
   if (alarm.time == time) {
      alarm.callback();
   }
}

function checkTimeDigits(i) {
// если в часах или минутах меньше двух чисел, добавляем 0
   if (i < 10) {
      i = "0" + i;
   }
   return i;
}

function testCase () {
   let phoneAlarm = new AlarmClock();
   phoneAlarm.addClock("09:00", () => console.log("Time to WAKE UP!"), 1);
   phoneAlarm.addClock("09:01", () => {console.log("WAKE UP INDEED!"); phoneAlarm.removeClock(2)}, 2);
   phoneAlarm.addClock("09:02", () => console.log("WAKE UP or DIE!")); // id isn't defined
   phoneAlarm.addClock("09:03", () => {
      console.log("Get up now!");
      phoneAlarm.clearAlarms();
      phoneAlarm.printAlarms();
   }, 3);
   phoneAlarm.addClock("09:04", () => console.log("Get up, dude!"), 1); //existing id
   phoneAlarm.printAlarms();
   phoneAlarm.start();
}
