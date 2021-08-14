function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

function multiplier(factor) {
  return (number) => number * factor;
}
let twice = multiplier(2);
// console.log(twice(5));

function power(base, exponent) {
  if (exponent == 0) return 1;
  else {
    return base * power(base, exponent - 1);
  }
}
// console.log(power(2, 3));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `${history} + 5`) ||
        find(current * 3, `${history} * 3`)
      );
    }
  }
  return find(1, `1`);
}
// console.log(findSolution(24));

function printLabel(number, width) {
  let numberString = String(number);
  while (numberString.length < width) {
    numberString = '0' + numberString;
  }
  return numberString;
}
function printFarmInvetory(cows, chikens, pigs) {
  console.log(`${printLabel(cows, 3)} Cows`);
  console.log(`${printLabel(chikens, 3)} Chikens`);
  console.log(`${printLabel(pigs, 3)} Pigs`);
}
// printFarmInvetory(10, 2, 200);
