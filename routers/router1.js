let data = require('../models/data');
module.exports = function () {
    setInterval(function () {
        console.log('From Router=' + data.ar);
        data.ar.push('Router ' + data.counter++);

    }, 2000);
}