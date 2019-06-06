const opt = [{
    descripcion:{
        demand:true,
        alias: 'd'
    },
    completado:{
        default: true,
        alias: 'c'
    }

}]
const argv = require('yargs')
                .command('crear','Crea una tarea por hacer',{
                    descripcion:{
                        demand:true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    },
                    /*completado:{
                        default: false,
                        alias: 'c',
                        desc: 'Descripción de la tarea'
                    }*/
                })
                .command('actualizar','Actualiza una tarea por hacer',{
                    descripcion:{
                        demand:true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    },
                    completado:{
                        default: true,
                        alias: 'c',
                        desc: 'Marca tarea como completada'
                    }
                })
                .command('borrar', 'Borra un elemento de la lista de tareas',{
                    descripcion:{
                        demand: true,
                        alias: 'd',
                        desc: 'Descripción de la tarea'
                    }
                })
                .help().argv;

module.exports = {
    argv
}