//ВИКОРИСТАННЯ ЦИКЛУ forEach і push

// const numbers = [1, 2, 3, 4, 5];
// const numbersUpdate = [];

// const addEl = (numbers, value) => {
//     return numbers.forEach(number => {
//         if (number >  value)
//         numbersUpdate.push(number);
//     });
// }
// addEl(numbers, 3);
// console.log(numbersUpdate);

// Напишіть функцію для роботи з колекцією навчаючих курсів courses:

// addCourse(name) - добавляє курс у кінець колекції, якщо він відстуній в ній

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// let message;

// const addCourse = (courses, value) => {
//     for (const course of courses) {
//         if (course === value) {
//             message = "Такий курс уже є";
//             console.log(message);
//         }
//           courses.push(value);
//          return courses;
//     }
// }

// addCourse(courses, "Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(courses);
// addCourse(courses, "CSS"); // 'У вас уже є такий курс'
// console.log(courses);

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCliens(value) {
  for (const client of courses) {
    if (client === value) {
      console.log("У вас уже є такий курс");
      break;
    }
    courses.push(value);

    return courses;
  }
}

console.log(addCliens("Express"));

// function changeEven(numbers, value) {
//     return numbers.map(el => ((el+1) % 2) * value + el)
// }

// console.log(changeEven([3,4,6,8], 2));
