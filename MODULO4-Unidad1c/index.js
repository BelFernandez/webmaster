const moment = require('moment');
moment.locale('es');

console.log('Naci ' + moment('01/02/1979','DD/MM/YYYY').fromNow())