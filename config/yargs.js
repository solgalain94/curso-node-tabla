const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base para multiplicar'          
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la lista'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default: 5,
                describe: 'Valor hasta el cual se multiplica por la base'
            })
            .check( (argv, options) => {
                if (isNaN(argv.b)){
                    throw "La base tiene que ser un número";
                }

                return true;
            })
            .argv;

module.exports = argv;