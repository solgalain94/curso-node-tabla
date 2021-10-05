const { demandOption, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');

console.clear(); 

// const base = 4;

// console.log(process.argv);
// console.log(argv);

console.log('base: ', argv.b, 'listar: ', argv.l);




crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));