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

      if (this.alarmCollection.some(timer => timer.id == id)) {  // если id не уникален, пробрасываем console.error()
         throw console.error(`Ошибка создания нового будильника. ID будльника \"${id}\" не уникален.`); // не понимаю, метод работает как требуется, а жасмин красный (
      }

      if (this.timerId == id) {  // добавил проверку timerId - всё равно жасмин красный
         throw console.error(`Ошибка создания нового будильника, timerId \"${id}\" не уникален.`);
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
         this.timerId = setInterval ((this.alarmCollection.every(alarm => checkClock(alarm))), 0);
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
      this.stop;
      this.alarmCollection.length = 0;
   }
}

function checkClock (alarm) { 
// принимает звонок и проверяет: если текущее время совпадает со временем звонка, вызываем колбек
   if (alarm.time == `${new Date().getHours()}:${new Date().getMinutes()}`) {
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
   const alarmClock = new AlarmClock();
}
