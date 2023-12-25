const express = require('express')
const hbs = require('express-handlebars')
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

app.get('/', (req, res) => {
    res.render('09-home')
})

app.get('/page1', (req, res) => {
    res.render('09-page', { page: 1 })
})

app.get('/page2', (req, res) => {
    res.render('09-page', { page: 2 })
})

app.get('/page3', (req, res) => {
    res.render('09-page', { page: 3 })
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)