function speak(line) {
  console.log(`The ${this.type}rabbit says '${line}'`);
}

let whiteRabbit = { type: 'white', speak };
let hungryRabbit = { type: 'hungry', speak };
whiteRabbit.speak(`I'm alive`);
hungryRabbit.speak(`I'm dying`);

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

console.log(Object.prototype);
console.log(Object.getPrototypeOf(Math.max));
console.log(Object.getPrototypeOf([]));

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type}rabbit says '${line}'`);
  },
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('SKEEEE');

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type}rabbit says '${line}'`);
};
Rabbit.prototype.teeth = 'small';
let weirdRabbit = new Rabbit('weird');
let blackRabbit = new Rabbit('black');
console.log(weirdRabbit.teeth);
killerRabbit.teeth = 'long';
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);

class RabbitC {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type}rabbit says '${line}'`);
  }
}
let weirdCRabbit = new RabbitC('weird');
console.log(weirdCRabbit);

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};
console.log(`Julia is ${ages['Julia']}`);
console.log(`Is Jack's age known ?`, 'Jack' in ages);
console.log(`Is toString's age known ?`, 'toString' in ages);
console.log('toString' in Object.create(null));

let ages2 = new Map();
ages2.set('Boris', 39);
ages2.set('Liang', 22);
ages2.set('Julia', 62);
console.log(ages2);
console.log(`Julia is ${ages2.get('Julia')}`);
console.log(`Is Jack's age known ?`, ages2.has('Jack'));
console.log(`Is toString's age known ?`, ages2.has('toString'));

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));

console.clear();

let sym = Symbol('name');
console.log(sym == Symbol('name'));
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let okIterator = 'OK'[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size);
console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);
