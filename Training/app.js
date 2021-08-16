let anObject = { left: 1, right: 2 };
console.log(anObject.left);
console.log(Object.keys(anObject));
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);
