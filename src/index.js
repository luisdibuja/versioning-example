const calculator = require('./calculator');

console.log('Welcome to the Versioning Example App!');
console.log('Version: 1.0.0');

// Basic calculator demonstration
const a = 10;
const b = 5;

console.log(`${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`${a} - ${b} = ${calculator.subtract(a, b)}`);
console.log(`${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`${a} / ${b} = ${calculator.divide(a, b)}`);