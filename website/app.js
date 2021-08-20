var express=require('express');
var app=express();
const mongoConnect = require("./models/model");

var routes=require('./routes/route.js');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

const passport = require('passport');

const expressSession = require('express-session')({
    secret: 'mikewang',
    resave: false,
    saveUninitialized: false
  });

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


app.use("/",routes);
var port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on port  http://localhost:' + port));


