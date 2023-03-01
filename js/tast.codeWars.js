const input = [];
console.log(typeof input);

function total(input) {
  let arraySum = [0, 0];

  if (input.every((el) => el === 0)) {
    arraySum = [];
  }

  if (typeof input === []) {
    arraySum = [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0 && input[i] !== 0) {
        arraySum[0] += 1;
      } else if (input[i] < 0 && input[i] !== 0) {
        arraySum[1] += input[i];
      }
    }
  }
  return arraySum;
}

console.log(total(array));

//   const input = [0, 0, 0];

//   function countPositivesSumNegative(input) {
//     let arraySum = [0, 0];

//     if (Array.isArray(input)) {
//       if (input.length === 0 ) {
//         return arraySum = [];
//       } else {

//           for (let i = 0; i < input.length; i++) {
//             if (input[i] > 0) {
//               arraySum[0] += 1;
//             } else if (input[i] < 0) {
//               arraySum[1] += input[i];
//             }

//           }
//             return (arraySum = []);
//       }
//     }
//     return arraySum;
//   }

//   console.log(countPositivesSumNegative(input));

// const input = [0,0];

//   function countPositivesSumNegatives(input) {

//       let arraySum = [0, 0];

//     if (input === null || input.length === 0) {
//       return []; // if the input is empty or null, it will return empty array
//     } else {
//       input.forEach((num) =>
//         num > 0 ? arraySum[0] ++ : (arraySum[1] += num)
//       );
//     }
//     return arraySum;
//   }

//     console.log(countPositivesSumNegatives(input));
