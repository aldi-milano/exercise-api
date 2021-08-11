console.log('hello world!');

const getGlobal = () => {
let API = 'https://covid19.mathdro.id/api/confirmed'
let option = {
    method: 'GET'
};

fetch(API, option)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log(error, 'ERROR'))
}

getGlobal()