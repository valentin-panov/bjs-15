"use strict";

class AlarmClock {
   constructor (){
      this.alarmCollection = []; // коллекция будильников
      this.timerId; // айди таймера
   }

   addClock (time, fn, id){  
// добавляет новый звонок в коллекцию существующих
// метод принимает время (формат hh:mm) коллбэк и айди
      if (!id) {throw new Error('error text');};  // если id не задан, пробрасываем ошибку
      if (this.alarmCollection.some(timer => timer.id == id)) {  // если id не уникален, пробрасываем console.error()
         throw console.error(`Error creating new alarm. Alarm ID \"${id}\" isn't unique.`); // не понимаю, метод работает как требуется, а жасмин красный (
      }
      this.alarmCollection.push({id: id, time: time, callback: fn}); //Перед завершением метода добавьте в массив звонков объект со свойствами id, time, callback.
   }

   removeClock (id) {
// удаляет определённый звонок
// Верните логическое значение об успешности/провале удаления объекта звонка из общего массива
      return !!(this.alarmCollection.splice(this.alarmCollection.findIndex(alarm => (alarm.id == id)), 1).length);
   }

   getCurrentFormattedTime () {
// возвращает текущее время в строковом формате HH:MM.
      return (`${new Date().getHours()}:${new Date().getMinutes()}`);

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