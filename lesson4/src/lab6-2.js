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

app.get('/thank-you', (req, res) => {
    res.render('lab6-2-thank-you')
})

app.get('/thank-you-and-sorry', (req, res) => {
    res.render('lab6-2-thank-you-and-sorry')
})

app.get('*', (req, res) => {
    res.render('lab6-2-feedback')
})

app.post('/process-feedback', (req, res) => {
    console.log(req.body.inputFeedback);
    if (req.body.inputFeedback == 'yes') {
        res.redirect(303, '/thank-you')
    } else {
        res.redirect(303, '/thank-you-and-sorry')
    }
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}\n`)
)