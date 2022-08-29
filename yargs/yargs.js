const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la lista de multiplicar'
    })
    .option('z',{
        alias: 'height',
        type: 'number',
        demandOption: true,
        describe: 'Limite de la tabla' 
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Tiene que ser un numero :(';
        }
        return true;
    })
    .argv;

module.exports = argv;