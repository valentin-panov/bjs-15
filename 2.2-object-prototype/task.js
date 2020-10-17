// TASK 1
String.prototype.isPalindrome = function() { // не уверен, нужно ли давать имя этой функции, на лекции всё было так скомкано %( а жасмин зелёный и так.
   'use strict';
   if (this.toUpperCase().replace(/[\s.,%]/g, '') === this.toUpperCase().replace(/[\s.,%]/g, '').split("").reverse().join("")) return true;
   return false;
}

// TASK 2

function getAverageMark(marks) {
   'use strict';
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

// TASK 3

function checkBirthday(birthday) {
   'use strict';
   if (Math.floor((Number(new Date()) - Number(new Date(birthday))) / (1000 * 31536000)) > 18) return true;
   return false;
}