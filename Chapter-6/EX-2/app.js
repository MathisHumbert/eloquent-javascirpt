// My way
class Group {
  constructor() {
    this.members = [];
  }
  has(value) {
    let hasValue = this.members.indexOf(value);
    if (hasValue === -1) {
      return false;
    } else {
      return true;
    }
  }
  add(value) {
    if (this.members.indexOf(value) === -1) {
      this.members.push(value);
    } else {
      return;
    }
  }
  delete(value) {
    let index = this.members.indexOf(value);
    if (index === -1) {
      return;
    } else {
      this.members.splice(index, 1);
    }
  }
  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
