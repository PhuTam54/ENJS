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

app.get('/bad-bad-not-good', (req, res) => {
    throw new Error("That didn't go well!")
})

app.get('*', (req, res) => {
    res.render('08-click-here')
})

app.use((err, req, res, next) => {
    console.log('** SERVER ERROR: ' + err.message)
    res.status(500).render('08-error', {
        message: "you shouldn't have clicked that!"
    })
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}/bad-bad-not-good`)
)