function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));

let test = ['a', 'b', 'c', 'd', 'e'];
let num = [213, 220];
test.concat(num);
console.log(test);

console.log('  okay / n'.trim());

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2));
let numbers = [5, 1, 7];
console.log(max(...numbers));
