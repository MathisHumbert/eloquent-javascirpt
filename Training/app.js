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
