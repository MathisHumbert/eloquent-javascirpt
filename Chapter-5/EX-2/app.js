// My way
function loop(value, func, iter, body) {
  if (func(value)) {
    body(value);
    value = iter(value);
    loop(value, func, iter, body);
  } else return;
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
