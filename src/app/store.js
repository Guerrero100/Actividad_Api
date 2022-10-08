/* Exportamos la clase para poder importarla en el index */
export class Store{

    //Metodo constructor (se ejecuta solo)
    constructor()
    {
        this.city;
        this.countryCode;
        //se define los valores predeterminados del aplicativo
        this.defaultCity = 'Medellín';
        this.defaultCountry = 'CO';
    }


/* Metodo para traer del localstorage la informacion antes de guardarla */
getLocationData()
{
    if (localStorage.getItem('city') === null) {
        this.city = this.defaultCity;
    } else {
        this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('countryCode') === null){
        this.countryCode = this.defaultCountry;
    } else {
        this.countryCode = localStorage.getItem('countryCode');
    }
    
    return{
        city: this.city,
        countryCode: this.countryCode
    }
}
    
    /* Meotoo para guardar informacion en el localStorage */
    setLocationData(city,countryCode)
        {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode',countryCode);
        }
}