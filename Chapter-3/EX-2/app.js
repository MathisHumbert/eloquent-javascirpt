// My way
function isEven(num) {
  if (num < 0) {
    if (num == 1) {
      return false;
    } else if (num == 0) {
      return true;
    } else {
      return isEven(num + 2);
    }
  } else {
    if (num == 1) {
      return false;
    } else if (num == 0) {
      return true;
    } else {
      return isEven(num - 2);
    }
  }
}

console.log(isEven(50));
console.log(isEven(71));
console.log(isEven(-2));
