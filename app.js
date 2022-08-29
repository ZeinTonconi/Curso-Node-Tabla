
const {crearArchivo} = require('./supporters/multiplicar');
const argv=require('./yargs/yargs');

console.clear();
// MANUAL
// const [,,arg3 = 'base=1'] = process.argv;
// const [,base = 1] = arg3.split('=');

//CON YARGS
console.log(argv);
//const base=3;

crearArchivo(argv.base,argv.height,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch( err => console.log(err));