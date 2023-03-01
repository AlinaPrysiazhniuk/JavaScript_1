const array = [];

function total(array) {
  let arraySum = [0, 0];

  //перевірка чи в масиві всі нулі, якщо так, то виводимо пустий масив
  if (array.every((el) => el === 0)) {
    arraySum = [];
  }

  //перевірка чи введений масив пустий, якщо так - то виводимо пустий масив,
  if (array.typeof === []) {
    arraySum = [];
  } else {
    //якщо введений масив не пустий, то йдемо по кожному елементу і перевіряємо на додатнє, відʼємне і виконуємо те, що там потрібно
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0 && array[i] !== 0) {
        arraySum[0] += 1;
      } else if (array[i] < 0 && array[i] !== 0) {
        arraySum[1] += array[i];
      }
    }
  }
  return arraySum;
}

console.log(total(array));
