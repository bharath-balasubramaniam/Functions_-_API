let latlng = [];
let request = new XMLHttpRequest();
let URL_String = 'https://restcountries.eu/rest/v2/all';

request.open('GET',URL_String,true);

request.onload = function() {
    let data =JSON.parse(this.response);
    for(let val of data) {
        latlng.push(val.latlng)
    }
    for (let i of latlng) {
        let req = new XMLHttpRequest();
        let url_string1 = `https://api.openweathermap.org/data/2.5/weather?lat=${i[0]}&lon=${i[1]}&units=metric&appid=916acdf9ccc6be948a3f32ad2eb6b918`;

        req.open('GET',url_string1,true);

        req.onload = function() {
            let data = JSON.parse(this.response);
            console.log(`country name: ${data.name} ... temperature minimum : ${data.main.temp_min} ... temperature maximum: ${data.main.temp_max}...`);
        }
        req.send();
    }
};
request.send();
