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
let weirdRabbit = new Rabbit('weird');
console.log(weirdRabbit);

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
