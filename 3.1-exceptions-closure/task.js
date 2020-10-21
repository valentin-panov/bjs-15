"use strict";

// TASK 1

function parseCount(value) {
   if (Number.isNaN(Number.parseInt(value))) throw new Error ("Невалидное значение"); // if value isn't parsable, we throw new err
   return Number.parseInt(value); // else return parse result
}

function validateCount(value) {
   try {
      return parseCount(value);
   } catch(err) {
      return err;
   }
}

// TASK 2

