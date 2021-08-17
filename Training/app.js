const reverseArray = (arr) => {
  let newArr = [];
  for (let i of arr) {
    newArr.unshift(i);
  }
  return newArr;
};
console.log(reverseArray(['A', 'B', 'C']));

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
};
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
