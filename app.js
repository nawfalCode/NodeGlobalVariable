let data = require('./models/data');
let router = require('./routers/router1');
setInterval(function () {
    console.log('From App=' + data.ar);
    data.ar.push('App ' + data.counter++);

}, 1000);

router();