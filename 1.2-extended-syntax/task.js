"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let x = [];
    // discriminant
    let d = Math.pow(b, 2) - (4 * a * c);

    switch (true) {
      case (d > 0):
        x[0] = -b - Math.sqrt(d) / (2 * a);
        x[1] = -b + Math.sqrt(d) / (2 * a);
        break;
      case (d == 0):
        x[0] = -b / (2 * a);
        break;
      case (d < 0):
        break;
      }

// вариант с if
    // if (d > 0) {
    //   // two answers
    //   x[0] = -b - Math.sqrt(d) / (2 * a);
    //   x[1] = -b + Math.sqrt(d) / (2 * a);
    // } else if (d == 0) {
    //   // one answer
    //   x[0] = -b / (2 * a);
    // } else if (d < 0) {
    // // zero answer
    // }

    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь

    // checking length of incoming data, if 0;
    if (marks.length == 0) {
      console.log(`Empty incoming data!`);
      return 0;
    }

    // checking length of incoming data, if more than 5, notify and cut the data;
    if (marks.length > 4) {
      console.log(`Marks count more than 5! (actually ${marks.length + 1}) We'll cut it to 5.`);
      let removed = marks.splice(5);
    }

    // declare fuct.variables
    let sumMarks = 0;
    let averageMark = 0;

    //accuaring average mark
    for (let i = 0; i < marks.length; i++) {
      sumMarks += marks[i];
      averageMark = sumMarks / (i + 1);
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь

    // сразу записываем результат для одного из условий
    let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    
    // получаем актуальную дату
    let now = new Date();

    //если разница в годах больше 18, меняем результат
    if ((dateOfBirthday.getFullYear() + 18) < now.getFullYear()) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    }

    return result;
}