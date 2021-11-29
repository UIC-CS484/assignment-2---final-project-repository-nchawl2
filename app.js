var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createAccountRouter = require('./routes/createAccount');
var submitRouter = require('./routes/submit');
var loginRouter = require('./routes/login');
var loginSubmitRouter = require('./routes/loginSubmit');
var dashboardRouter = require('./routes/dashboard');
var invalidLoginRouter = require('./routes/invalidLogin');
var leaguesRouter = require('./routes/leagues');
var standingsRouter = require('./routes/standings');
var standingsDarkRouter = require('./routes/standingsDark');
var resultErrorRouter = require('./routes/resError');
var livescoreRouter = require('./routes/score');
var addToFavRouter = require('./routes/addToFav');
var getLeagueRouter = require('./routes/getLeague');

var app = express();
var SQLiteStore = require('connect-sqlite3')(session);

require('./config/passport')(passport);

var session_config = {
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true },
  store: new SQLiteStore({
    db: './database/task.sqlite'
  })
  // store parameter when saving session to database
};
session_config.cookie.secure = false;

app.use(session(session_config));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createAccount', createAccountRouter);
app.use('/submit', submitRouter);
app.use('/login', loginRouter);
app.use('/loginSubmit', loginSubmitRouter);
app.use('/dashboard', dashboardRouter);
app.use('/invalidLogin', invalidLoginRouter);
app.use('/leagues', leaguesRouter);
app.use('/result', standingsRouter);
app.use('/resultDark', standingsDarkRouter);
app.use('/resultError', resultErrorRouter);
app.use('/livescore', livescoreRouter);
app.use('/addToFav', addToFavRouter);
app.use('/getLeague', getLeagueRouter);

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
