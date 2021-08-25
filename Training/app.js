let rabbit = {
  speak: function (line) {
    console.log(`The rabbit says ${line}`);
  },
};
rabbit.speak('World');

function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = { type: 'white', speak };
let blackRabbit = { type: 'black', speak };
whiteRabbit.speak('World');
whiteRabbit.speak('World');

function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says ${line}`);
};

let weirdRabbit = new Rabbit('weird');
weirdRabbit.speak('lleamnzv');

class RabbitBis {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says ${line}`);
  }
}
let killerRabbit = new RabbitBis('killer');
killerRabbit.speak('crazy');
