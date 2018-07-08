var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

var routerAdmin = require('./routes/admin');
var routerPublic = require('./routes/public');
var routerRestApi = require('./routes/restApi');

var sessionConfig = {
  secret: 'perseb4y4',
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    // domain: 'example.com',
    // path: 'foo/bar',
    // expires: expiryDate
  }
}
function adminMiddleware(req, res, next){
  console.log('admin middleware');
  
  // CEK LOGIN
  if(!req.session.loginUser){
    return res.redirect('/public/login');
  }
  next();
}

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//SETTING SESSION
// app.set('trust proxy', 1); // trust first proxy if SECURE = TRUE
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.redirect('/public/login');
});
app.get('/logout', function(req, res) {
  req.session.loginUser = false;
  res.redirect('/public/login');
});
app.use('/public', routerPublic);
app.use('/restApi/mobile', routerRestApi);
app.use('/admin/', adminMiddleware,routerAdmin);

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

var reload = require('livereload').createServer({
  exts: ['js','css','pug']
});
reload.watch(path.join(__dirname, 'views'));
reload.watch(path.join(__dirname, 'public'));
reload.watch(path.join(__dirname, 'models'));
reload.watch(path.join(__dirname, 'routes'));
reload.watch(path.join(__dirname, 'controllers'));

module.exports = app;
