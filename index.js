
console.log('JavaScript works in Node!')
let { faker } = require('@faker-js/faker')
let {name, age} = require('./main')
console.log(name)
console.log(age)

for (let i=0; i< 10; i++) {
    let product = faker.commerce.product()
    let price = faker.finance.amount()
    console.log(`${product} is for $${price}`)
}








/*

var colors = require('@colors/colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

// outputs red text
console.log("this is an error".error);

// outputs yellow text
console.log("this is a warning".warn);

*/