const axios = require('axios');
require('dotenv').config();
class Busquedas{

    constructor(){

    }
    

    async ciudad( lugar = ''){
        
        //console.log('ciudad',lugar);
        try {

            const instance = axios.create({
                baseURL: `https://us1.locationiq.com/v1/search.php?`,
                params: {
                    'key': process.env.GEO_KEY,
                    'q': `${lugar}`,
                    'limit': 5,
                    'accept-language': 'es',
                    'format': 'json'
                }
            });


            const resp = await instance.get();
            return resp.data.map(lugar =>({
                id: lugar.place_id,
                nombre: lugar.display_name,
                lat: lugar.lat,
                lon: lugar.lon
            }))
        } catch (error) {
            return [];
        }
        

    }

    async clima( lat = '', lon = ''){
        
        //console.log('ciudad',lugar);
        try {

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
                params: {
                    'lat': `${lat}`,
                    'lon': `${lon}`,
                    'appid': process.env.CLIMA_KEY,
                    'units': 'metric'
                }
            });
            const resp = await instance.get();
            return resp.data.main={
                temp: resp.data.main.temp,
                sensacion: resp.data.main.feels_like,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max
            }
        } catch (error) {
            return [];
        }
        

    }

    

}


module.exports = Busquedas;