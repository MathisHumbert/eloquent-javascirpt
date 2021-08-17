function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  let arr = [];
  for (node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

console.log(
  listToArray({
    value: 10,
    rest: {
      value: 20,
      rest: {
        value: 30,
        rest: null,
      },
    },
  })
);

function prepend(value, list) {
  return { value, rest: list };
}
console.log(prepend(10, prepend(20, null)));

let obj = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: null,
    },
  },
};

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
