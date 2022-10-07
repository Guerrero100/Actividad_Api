/* Exportamos la clase para poder importarla en el index */
export class Weather{

    //Metodo cosntructor (se ejecuta solo)
    constructor (city, countryCode)
    {
        this.apikey = 'bee2c20ab8364e139a074e5268bac67d';
        this.city = 'city';
        this.countryCode = 'countryCode';
    }
    /* Metodo asicronico y dentro un await (que la peticion puede tardar) */
    async getWeather()
    
    {
        //url de la api
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},
            ${this.country-Code}&appid=${this.apikey}&units=metric`;
        //Se hace la peticion con fetch y await es para especificar que puede tardar 
        const response = await fetch(URI);
        
        const data = await response.json();
        return data;
        
        //metodo para cambiar la ciudad consultada  
        changeLocation(city, countryCode)
        {
            this.city = city;
            this.countryCode = countryCode;
        } 
        
    }
    
}