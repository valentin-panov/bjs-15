// TASK 1
String.prototype.isPalindrome = function() { // не уверен, нужно ли давать имя этой функции, на лекции всё было так скомкано %( а жасмин зелёный и так.
   'use strict';
   if (this.toUpperCase().replace(/[\s.,%]/g, '') === this.toUpperCase().replace(/[\s.,%]/g, '').split("").reverse().join("")) return true;
   return false;
}

function getAverageMark(marks) {
   if (!marks) return 0;

   let sumMarks = 0;
   let countMarks = 0;

   for (let key in marks) {
      sumMarks += marks[key];
      countMarks++;
   }
   if (countMarks == 0) return 0;

   return Math.round(sumMarks / countMarks);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}