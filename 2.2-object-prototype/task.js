// TASK 1
String.prototype.isPalindrome = function isPalindrome() {
   'use strict';
   if (this.toUpperCase().replace(/[\s.,%]/g, '') === this.toUpperCase().replace(/[\s.,%]/g, '').split("").reverse().join("")) return true;
   return false;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}