var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tallerRouter = require('./routes/taller');
var contactoRouter = require('./routes/contacto');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/taller', tallerRouter);
app.use('/contacto', contactoRouter);


app.get('/alquiler', function(req,res){
  res.send('alquiler de motos')
})
app.get('/venta', function(req,res){
  res.send('venta de motos 0km y usadas')
})
app.get('/repuestos', function(req,res){
  res.send('venta de repuestos y accesorios para motos y cuatriciclos')
})






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
