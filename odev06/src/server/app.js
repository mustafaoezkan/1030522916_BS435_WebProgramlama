const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./db/users');

const app = express();
const matchApi = require('./routes/match-api');
const authApi = require('./routes/auth-api');

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(session({
    secret: 'cookie şifrelenirken kullanılacak secret key',
    resave: false,
    saveUninitialized: false,
}));

passport.use(new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'password'
}, (userId, password, done) => {
    const ok = Users.verifyUser(userId, password);

    if (!ok) {
        return done(null, false, { message: 'Geçersiz kullanıcı adı/şifre' });
    }

    const user = Users.getUser(userId);
    return done(null, user);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    const user = Users.getUser(id);
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});

app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api', matchApi);
app.use('/api', authApi);


app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = app;