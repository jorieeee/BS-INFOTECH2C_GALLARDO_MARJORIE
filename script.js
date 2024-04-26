const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("EVEN NUMBERS:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

console.log("ODD NUMBERS:");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}