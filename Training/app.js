function arrayToList(arr) {
  let list = null;
  for (let i = arr.length; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20]));

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
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

function prepend(elem, list) {
  return (list = { value: elem, rest: list });
}
console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else {
    return nth(list.rest, n - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 2));
