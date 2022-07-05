const { resolve } = require('path');

require('colors');

const mostrarMenu = () =>{
    return new Promise( resolve =>{
        console.log('==========='.green);
console.log('Seleccione una opcion'.green);
console.log('==========='.green);


console.log(`${'1.'.green} Crear Tarea`);
console.log(`${'2.'.green} Listar Tareas`);
console.log(`${'3.'.green} Listar Tareas Completadas`);
console.log(`${'4.'.green} Listar Tareas Pendientes`);
console.log(`${'5.'.green} Completar Tarea(s)`);
console.log(`${'6.'.green} Borrar Tarea`);
console.log(`${'0.'.green} Salir`);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Seleccione una opción: ',(opt)=>{
    readline.close();
    resolve(opt);
})
    
})


}

const pausa = () =>{
    return new Promise( resolve =>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question(`\nPresione ${'Enter'.green} para continuar `,(opt)=>{
        readline.close();
        resolve();
    })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}