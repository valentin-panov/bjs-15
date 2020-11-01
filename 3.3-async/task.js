"use strict";

class AlarmClock {
   constructor (){
      this.alarmCollection = []; // коллекция будильников
      this.timerId; // айди таймера
   }
   addClock (time, fn, id){  // метод принимает время (формат hh:mm) коллбэк и айди
      if (!id) {throw new Error('error text');};  // если id не задан, пробрасываем ошибку
      if (this.alarmCollection.some(timer => timer.id == id)) {  // если id не уникален, пробрасываем console.error()
         //debugger; не разобрался, почему это пробрасывает ошибку, но не зеленит жасмин
         throw console.error(`Error creating new alarm. Alarm ID \"${id}\" isn't unique.`);
         // как завершить метод?
      }
      this.alarmCollection.push({id: id, time: time, callback: fn}); //Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.

   }
   removeClock (id) {
      console.log(this.alarmCollection.find(alarm => (alarm.id == id)));
//      const removedAlarm = this.alarmCollection.filter(alarm => (alarm.id == id));
//      removedAlarm.splice(0, 1);
      console.log(this.alarmCollection);
//      console.log(removedAlarm);
//      console.log(removedAlarm.length);
      return removedAlarm.length;
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