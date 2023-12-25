const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
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

const port = process.env.PORT || 3000

// parse from responses
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/thank-you', (req, res) => {
    res.render('10-thank-you')
})

app.get('*', (req, res) => {
    res.render('10-home')
})

app.post('/process-contact', (req, res) => {
    console.log(`received contact from ${req.body.name} <${req.body.email}>`);
    res.redirect(303, '/thank-you')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)