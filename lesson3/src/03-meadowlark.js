const express = require('express')
const hbs = require('express-handlebars')
const app = express()

// Use static folder
app.use(express.static(__dirname + '/public'));

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

app.get('/', (req, res) => res.render('home'))

const fortunes = [
    "Conquer",
    "Rivers",
    "Do not..."
]

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
})

// Custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}`)
)