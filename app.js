var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var playersRouter = require('./routes/players');
var clansRouter = require('./routes/clans');
var locationsRouter = require('./routes/locations');

const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBlNmQxYjlhLTc2NWEtNGU3ZC04OTc4LWRkMThhZDI0MzNkYSIsImlhdCI6MTU4MzI3NjI4OCwic3ViIjoiZGV2ZWxvcGVyL2MxZjhiZjQyLWMzMjEtOWIxNS00YjE5LTQ5YjJkNDRlZGMxNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuMTgzLjEwMy4xNzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.PdxfwmaCgtXKT0TRvE_NUbNWgQlpCeuKO_GpaNAGpne8JAkAs3QT1X0Vvb2p3PlmLHT341WCYTLgFf6L59viuQ';


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/', playersRouter);
app.use('/', clansRouter);
app.use('/', locationsRouter);

/*app.use('/getCurrentsCards', playersRouter );*/

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
