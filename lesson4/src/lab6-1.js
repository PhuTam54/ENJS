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

// Sử dụng body-parser để xử lý dữ liệu từ biểu mẫu
app.use(bodyParser.urlencoded({ extended: true }));

const user = {}

app.get('/thank-you', (req, res) => {
    res.render('lab6-1-thank-you', { user })
})

app.get('*', (req, res) => {
    res.render('lab6-1-register')
})

app.post('/process-register', (req, res) => {
    user.email = req.body.email,
    user.password = req.body.password,
    res.redirect(303, '/thank-you')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)