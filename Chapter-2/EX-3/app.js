// My way
let grid = 10;
let output = '';
for (let i = 1; i <= grid; i++) {
  if (i % 2 == 0) {
    output += ' # # # # \n';
  } else {
    output += '# # # # \n';
  }
}
console.log(output);
