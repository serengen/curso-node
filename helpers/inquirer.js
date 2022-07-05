require('colors');
const inquirer = require("inquirer");
const { describe } = require('yargs');

const preguntas= [
    {
        type: 'list',
        name: 'opcion',
        message: 'elija',
        choices: [{
            value: '1',
            name: `${'1'.green}. Buscar Ciudad`
        },
        {
            value: '2',
            name: `${'2'.green}. Historial`
        },
        {
            value: '0',
            name: `${'0'.green}. Salir`
        }
    ]
    }
];


const inquirerMenu = async() =>{
    //console.clear();
    console.log('==========='.green);
    console.log('Seleccione una opcion'.green);
    console.log('==========='.green);

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() =>{
    const opt = await inquirer.prompt([{
        type: 'input',
        name: 'pausa',
        message: 'Presione Enter para comtinuar...'
    }]);
    return opt;
}

const leerInput = async(message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}
const listaLugares = async(lugares = [])=>{
    
    const choices = lugares.map((lugar, i) =>{
        const idx = `${i+1}`.green;
        
        
        return{
            value: lugar.id,
            name: `${lugar.nombre}`
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Seleccione Lugar',
        choices
    }
]
   const{id} = await inquirer.prompt(preguntas);
   return id;
}

const confirmar = async (message)=>{
    const question =[
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const{ok}= await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCecklist = async(tareas = [])=>{
    
    const choices = tareas.map((tarea, i) =>{
        const idx = `${i+1}`.green;
        
        
        return{
            value: tarea.id,
            name: `${tarea.desc}`,
            checked: (tarea.completadoEn)?true : false
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });
    const preguntas = [{
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccione',
        choices
    }
]
   const{ids} = await inquirer.prompt(preguntas);
   return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listaLugares,
    confirmar,
    mostrarListadoCecklist
}