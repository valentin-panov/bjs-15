"use strict";

class AlarmClock {
   constructor (){
      this.alarmCollection = []; // коллекция будильников
      this.timerId; // айди таймера
   }
   addClock (time, fn, id){  // метод принимает время (формат hh:mm) коллбэк и айди
      if (!id) {throw new Error('error text');};  // если id не задан, пробрасываем ошибку
      if (this.alarmCollection.some(timer => timer.id == id)) {  // если id не уникален, пробрасываем console.error()
         throw console.error(`Error creating new alarm. Alarm ID ${id} isn't unique.`);
      }
      this.alarmCollection.push({id: id, time: time, callback: fn}); //Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.

   }
   removeClock (timerId) {

   }
   getCurrentFormattedTime () {

   }
   start () {

   }
   stop () {

   }
   printAlarms () {

   }
   clearAlarms () {

   }
}

function testCase () {
   
}