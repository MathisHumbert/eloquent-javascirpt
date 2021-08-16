// My way
function range(num1, num2, step = 1) {
  let arr = [];
  if (num1 < num2) {
    for (let i = num1; i <= num2; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = num1; i >= num2; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let acc = 0;
  for (let num of arr) {
    acc += num;
  }
  return acc;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
