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
