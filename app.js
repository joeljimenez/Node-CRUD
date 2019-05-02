const argv = require('./config/yargs').argv;
const porHacer = require('./tareas-hacer/tareas_hacer');
const color = require('colors')




let comando = argv._[0];

switch (comando) {
    case 'create':

        porHacer.crear(argv.descripcion);

        break;

    case 'show':
        let listado = porHacer.GetTareas();
        console.log('Tareas para Realizar\n'.yellow);
        console.log('==============================\n'.blue);
        for (const tareas of listado) {
            console.log(`Tarea: ${tareas.descripcion} Estado: ${tareas.completado}`.yellow);
        }
        console.log('\n=============================='.blue)

        break;

    case 'update':
        let ok = porHacer.Actualizar(argv.descripcion, argv.completado);
        if (ok) {
            console.log("Descripcion Actualizada".green)
        } else {
            console.log("No se Pudo  Actualizar la Descripción".red)
        }
        break;

    case 'delete':
        let eliminar = porHacer.Eliminar(argv.descripcion);
        if (eliminar) {
            console.log("Tarea Eliminada".green)
        } else {
            console.log("No se Pudo  Eliminar la nota".red)
        }

        break;
    default:
        console.log('Comando no reconocido');
        break;
}