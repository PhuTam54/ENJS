const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/text', (req, res) => {
    res.type('text/plain')
    res.send('this is a test')
})

app.get('*', (req, res) => {
    res.send('Check out our "<a href="/text">Plain text</a> page!"')
})

app.listen(port, () => 
    console.log(`App listening on port http://localhost:${port}/text`)
)