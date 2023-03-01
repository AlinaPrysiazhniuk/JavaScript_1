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

//const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCliens(value) {
//   for (const client of courses) {
//     if (client === value) {
//       console.log("У вас уже є такий курс");
//       break;
//     }
//     courses.push(value);

//     return courses;
//   }
// }

// console.log(addCliens("Express"));

// function changeEven(numbers, value) {
//     return numbers.map(el => ((el+1) % 2) * value + el)
// }

// console.log(changeEven([3,4,6,8], 2));

// const singleBtn = document.querySelector("#single");
// let value = 0;

// const handleClick = () => {
//   value += 1;
//   console.log(value);
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   value -= 1;
//   console.log(value);
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);
const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});

function changeEven(numbers, value) {
  return numbers.map((el) => ((el + 1) % 2) * value + el);
}

console.log(changeEven([1.2, 2], 2));

//Перевірка парності непарності дробових чисел
const el = ((1.3 + 1) % 2) * 2 + 1.3;
console.log(parseFloat(el).toFixed(1));
// 1.3 + 1 = 2.3 => 2.3 % 2 = 0.3 (а має бути 0 або 1).
//Аналогічна ситуація з парним дробовим (рядки 12-13)
//Думаю, що операція перевірки парності/ непарності в js працює лише для цілих чисел
//принаймні навіть в а/п ніколи в задах подібного типу не було дробових чисел, або я щось уже не памʼятаю

const el1 = ((1.2 + 1) % 2) * 2 + 1.2;
console.log(parseFloat(el1).toFixed(1));

//я думаю, що у випадку коли ми перевіряємо масив із різного роду чисел, то при виконанні операції % 2 потрібно ще ставити умову потім - якою є остача від ділення -
//1) якщо 1  => то робити одну дію
//2) якщо 0 => то нічого не робити
//3) якщо 0 < остача < 1 - то прописати код, щоб перевірив парність остачі чи щось типу того

//Одним словом, на перевірку парності дробових чисел потрібно більше умов
