// My way
function range(num1, num2, index) {
  let arr = [];
  for (num1; num1 <= num2; num1++) {
    arr.push(num1);
  }

  return arr;
}

console.log(range(1, 10));

function sum(arr) {
  let acc = 0;
  for (let num of arr) {
    acc += num;
  }
  return acc;
}

console.log(sum(range(1, 10)));
