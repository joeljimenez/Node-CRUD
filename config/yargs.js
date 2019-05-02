const argv = require('yargs')
    .command('create', 'Crear Una Tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }

    })
    .command('show', 'Crear Una Tarea')
    .command('delete', 'Eliminar Tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Eliminar un campo'
        }
    })
    .command('update', 'Actualiza Una Tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza en campo'
        },
        completo: {
            demand: true,
            alias: 'c',
            default: true,
            desc: 'Si Estalista la actualización se coloca true '
        }

    })
    .help()
    .argv;

module.exports = {
    argv,
}