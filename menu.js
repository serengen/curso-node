require('colors');
const { inquirerMenu, pausa, leerInput, listaTareasBorrar, confirmar, mostrarListadoCecklist } = require('./helpers/inquirer');
const { guardarDB, leerDB } = require('./models/guardarArchivo');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');




const main = async() =>{

    let opt= '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if (tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    } 
        
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;   
            case '5':
                const ids = await mostrarListadoCecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id  = await listaTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar("Esta seguro?");
                    if (ok) {
                      console.log("Tarea Borrada");
                      tareas.borrarTarea(id);
                    }
                }
                break; 
            default:
                break;
        }

        guardarDB(tareas.listadoArr);


        if (opt !== '0'){
            console.log('\n');
            await pausa();
        } 
        
    } while (opt !== '0');
    
}

main();