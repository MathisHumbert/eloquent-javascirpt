// My way
function every(array, test) {
  for (let i of array) {
    if (!test(i)) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  return !array.some((arr) => !test(arr));
}
console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
