const express = require('express')
const hbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const catNames = require('cat-names')
const app = express()

// Configure Handlebars view engine
app.engine(
    'hbs', 
    hbs.engine({
        extname: '.hbs',
        defaultLayout: 'main'
    }),
)
app.set('view engine', 'hbs');
app.set('views', __dirname + '/resources/views');

// The following is needed for cookie support
app.use(cookieParser())

// The following is needed for session support
app.use(session({ resave: false, saveUninitialized: false, secret: 'keyboard cat' }))

const port = process.env.PORT || 3000

app.get('/greeting', (req, res) => {
    res.render('greeting', {
        message: 'Hello esteemd programer!',
        style: req.query.style,
        userid: req.cookies.userid,
        username: req.session.username,
    })
})

app.get('/set-random-userid', (req, res) => {
    res.cookie('userid', (Math.random()*10000).toFixed(0))
    res.redirect('/greeting')
})

app.get('/set-random-username', (req, res) => {
    req.session.username = catNames.random()
    res.redirect('/greeting')
})

app.get('*', (req, res) => {
    res.send(`Check out our "<a href="/greeting">greeting</a> page!"`)
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}/greeting`)
)