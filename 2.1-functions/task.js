

function getSolutions(a, b, c){
   // discriminant
   let D = Math.pow(b, 2) - (4 * a * c);

   switch (true) {
      case (D < 0):
         return {D: D, roots: []}
      case (D == 0):
         let x1 = -b / (2 * a);
         return {D: D, roots: [x1]}
      case (D > 0):
         let x2 = (-b + Math.sqrt(D)) / (2 * a);
         let x3 = (-b - Math.sqrt(D)) / (2 * a);
         return {D: D, roots: [x2, x3]}
      }
}

function showSolutionsMessage(a, b, c) {
   let result = getSolutions( a, b, c );

   console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
   console.log(`Значение дискриминанта: ${result.D}`);

   switch (true) {
      case (result.D < 0) :
         console.log("Уравнение не имеет вещественных корней");
         break;
      case (result.D == 0) :
         console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
         break;
      case (result.D > 0) :
         console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
         break;
   }

}