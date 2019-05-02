const fs = require('fs');

let DoList = [];
/* ================================
Guardar los datos en la base de datos o en el archivo data.json
================================*/
const GuardarBD = () => {
        let data = JSON.stringify(DoList);
        fs.writeFile('BD/data.json', data, (err) => {
            if (err) {
                throw new Error("No se pudo guardar el archivo json");
            } else {
                console.log("Nota creada Correctamente")
            }
        });

    }
    /* ================================
    Cargar el archivo JSON dentro de una variable
    ================================*/
const cargarBD = () => {
        try {
            DoList = require('../BD/data.json');

        } catch (error) {
            DoList = [];
        }
    }
    /*==============================================*/

/* ================================
   Funcion crear la cual se importa para poder utilizarla en otros archivos
    ================================*/
const crear = (descripcion) => {
        cargarBD();


        let porHacer = {
            descripcion,
            completado: false,
        }
        DoList.push(porHacer);
        GuardarBD();

    }
    /*======================================================= */


/* ================================
   Funcion la cual trae todos los datos del archivo json
    ================================*/
const GetTareas = () => {
    cargarBD();
    return DoList;
}


/* ================================
 Actualiza el campo completado
    ================================*/
const Actualizar = (descripcion, completado = true) => {
        let index = buscar(descripcion);
        if (index >= 0) {
            DoList[index].completado = completado;
            GuardarBD();
            return true;
        } else {
            return false;
        }

    }
    /* ================================
     Eliminar una tarea
        ================================*/
const Eliminar = (descripcion) => {
    let index = buscar(descripcion);
    if (index >= 0) {
        DoList.splice(index, 1);
        GuardarBD();
        return true;
    } else {
        return false;
    }

}

const buscar = (descripcion) => {
    cargarBD();
    let index = DoList.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    return index;
}

/* ================================
Exportaciones
    ================================*/
module.exports = {
    crear,
    GetTareas,
    Actualizar,
    Eliminar,
}