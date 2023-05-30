// const argv = process.argv.slice(2)
// console.log(argv); //Returns an array with argument values

// Without slice(2)
// PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js hello world
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\DG-LT-ARCH\\Desktop\\test\\app.js',
//   'hello',
//   'world'
// ]
//
// With slice(2)
// PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js hello world
// [ 'hello', 'world' ]
//======================
    
const argv = require("yargs").argv;
console.log(argv); // Returns an object with argument values
/*
PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js
{ _: [], '$0': 'app.js' }
PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js hello world
{ _: [ 'hello', 'world' ], '$0': 'app.js' }
PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js --hello world
{ _: [], hello: 'world', '$0': 'app.js' }
PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js --hello=world
{ _: [], hello: 'world', '$0': 'app.js' }
PS C:\Users\DG-LT-ARCH\Desktop\test> node app.js --hello world df
{ _: [ 'df' ], hello: 'world', '$0': 'app.js' }
*/