// My way
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(a, b) {
    return new Vec(this.x + a, this.y + b);
  }
  minus(a, b) {
    return new Vec(this.x - a, this.y - b);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(2, 3));
console.log(new Vec(1, 2).minus(2, 3));
console.log(new Vec(3, 4).length);
