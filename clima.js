const { Axios, default: axios } = require("axios");
const { leerInput, inquirerMenu,pausa, listaLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async() => {
    let opt= '';
    const busquedas = new Busquedas();
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const lugar = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(lugar);
                const id = await listaLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);
                const clima = await busquedas.clima(lugarSel.lat,lugarSel.lon);
                console.log(clima);
                //console.log({id});
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ',lugarSel.nombre);
                console.log('Lat: ',lugarSel.lat);
                console.log('Lng: ',lugarSel.lon);
                console.log('Temperatura: ',clima.temp);
                console.log('Minima: ',clima.min);
                console.log('Maxima: ',clima.max);
                break;
            case '2':
                
                break;
            default:
                break;
        }
        if (opt !== '0'){
            console.log('\n');
            await pausa();
        } 
    }while(opt!=='0');

}

main();