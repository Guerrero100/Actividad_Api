/* Se importa los estilos */
require('./index.css');

    //importamos la clase weather desde el archivo weather
    const { Weather } = require('./weather');

    /* Importamos la clase UI desde el archivo UI */
    const { UI } = require('./UI');

      /* importamos la clase store desde el archivo store */
      const { Store } = require('./store');

      //se crea una nueva instancia store
        const store = new Store();
        const {city,countryCode} = store.setLocationData();

    //se crea una nueva instancia weather
    const weather = new Weather (city, countryCode);
    /* Se crea una nueva instancia UI */
    const ui = new UI ();
  

    //Se crea la funcion asincronica fetchWeather
    async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);  
    ui.render(data);
    }
    /* Se obtiene el elemento del boton, se escucha y el evento y se realiza una funcion */
    document.getElementById('w-chage-btn').addEventListener('click', (e)=>{

        //se obtiene los elementos de cuidad y codigo de pais 
        const city = document.getElementById('city').value;
        const countryCode = document.getElementById('countryCode').value;

        weather.chageLocation(city,countryCode);
        store.setLocationData(city, countryCode);
        fetchWeather();

        e.preventDefault();
    });

    /* se escucha el evento y se corre la funcion */
    document.addEventListener('DOMContentLoaded', fetchWeather);