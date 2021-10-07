const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { join } = require('path');

//configuraciones
app.set('port', process.ENV.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
//rutas
app.use(require('./routes/index'));
//archivos staticos
app.use(express.static(path.join(__dirname, 'public')));
//escuchando el servidor
app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});
