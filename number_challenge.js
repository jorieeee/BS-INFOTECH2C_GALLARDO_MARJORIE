/*
    1 Create a function that will return the sum 3 numbers
    2 Create a function that will return the difference of the 2 numbers
    3 Create a function that will return the product of the 2 numbers
    4 Create a function that will return the average of the 2 numbers
*/
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

function difference(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function average(num1, num2) {
  return (num1 + num2) / 2;
}

const resultSum = sum(10, 20, 30);
console.log("Sum:", resultSum);

const resultDifference = difference(40, 15);
console.log("Difference:", resultDifference);

const resultProduct = product(10, 7);
console.log("Product:", resultProduct);

const resultAverage = average(20, 2);
console.log("Average:", resultAverage);