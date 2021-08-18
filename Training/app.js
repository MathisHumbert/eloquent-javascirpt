function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

function characterCount(script) {
  return script.range.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))
// Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)))
