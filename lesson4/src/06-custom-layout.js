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

app.get('/custom-layout', (req, res) => {
    res.render('custom-layout', {
        layout: 'custom',
    })
})

app.get('*', (req, res) => {
    res.send('Check out our "<a href="/custom-layout">custom-layout</a> page!"')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}/custom-layout`)
)