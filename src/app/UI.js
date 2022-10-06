//Exportamos la clase para poder importarla en el index 
export class UI {

    //Metodo constructor (se ejecuta solo)
    constructor()
    {

        /* se trae todos los elementos necesarios */ 
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.huminity = document.getElementById('weather-huminity');
        this.wind = document.getElementById('weather-wind');
    }

    /* Metodo para mostrar en la vista los datos  */
    render(weather)
    {
        /* con la funcion textContext insertamos texto en el elemento  */

        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['descripcion'];
        this.string.textContent = weather.main.temp + '°C';
        this.huminity.textContent = 'huminity: ' + weather.main.huminity + '%';
        this.wind.textContent = 'wind: ' + weather.wind.speed + 'm/s';
    }

}