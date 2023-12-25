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
app.use(bodyParser.json())

app.get('/thank-you', (req, res) => {
    res.render('11-thank-you')
})

app.get('/contact-error', (req, res) => {
    res.render('11-contact-error')
})

app.get('*', (req, res) => {
    res.render('11-home')
})

app.post('/process-contact', (req, res) => {
    try {
        if (req.body.simulateError) throw new Error("Error saving contact!")
        console.log(`received contact from ${req.body.name} <${req.body.email}>`);
        res.format({
            'text/html': () => res.redirect(303, '/thank-you'),
            'application/json': () => res.json({ success: true })
        })
    } catch (err) {
        console.log(`Error processing contact from ${req.body.name} <${req.body.email}>`);
        res.format({
            'text/html': () => res.redirect(303, '/contact-error'),
            'application/json': () => res.status(500).json({
                error: 'error saving contact information',
            })
        })
    }
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)