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

class Triangle {
   constructor(a,b,c) {

      if ((a + b) < c || (b + c) < a || (c + a) < b) throw new Error ("Треугольник с такими сторонами не существует");

      this.a = a;
      this.b = b;
      this.c = c;
   }

   getPerimeter(){
      return (this.a + this.b + this.c);
   }

   getArea(){
      let p = this.getPerimeter() / 2;
      return Number(Math.sqrt(p * (p - this.a)* (p - this.b)* (p - this.c)).toFixed(3));
   }
}

function getTriangle(a,b,c) {
   debugger;
   try {
      return new Triangle(a,b,c);
   } catch {
      return ({getArea(){return "Ошибка! Треугольник не существует"}, getPerimeter(){return "Ошибка! Треугольник не существует"}});
   }
   
}